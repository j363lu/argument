"use client";

import { useRef } from "react";
import { useChat } from "ai/react";
import va from "@vercel/analytics";
import clsx from "clsx";
import { LoadingCircle, SendIcon, UserIcon } from "../components/icons";
import { Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Textarea from "react-textarea-autosize";
import { toast } from "sonner";
import Panel from "../components/Panel";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { selectTopic, selectPoliticalPreference, selectType } from "@/lib/typeSlice";
import { setMessages } from "@/lib/messagesSlice";

import NavigationButton from "../components/NavigationButton";

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const topic = useAppSelector(selectTopic);
  const type = useAppSelector(selectType);
  const politicalPreference = useAppSelector(selectPoliticalPreference);
  const dispatch = useAppDispatch();

  // determine systemPrompt
  let systemPrompt = "";
  if (politicalPreference == "democrat" && topic == "freeTrade" && type == "value") {
    systemPrompt = "You are trying to convince me that free trade should be legal. Persuade by appealing to democratic values. Keep your responses to one paragraph.";
  } else if (politicalPreference == "democrat" && topic == "freeTrade" && type == "reason") {
    systemPrompt = "You are trying to convince me that free trade should be legal. Persuade by explaining why republicans do not want free trade. Keep your responses to one paragraph.";
  } else if (politicalPreference == "democrat" && topic == "kidneyMarkets" && type == "value") {
    systemPrompt = "You are trying to convince me that kidney markets should be legal. Persuade by appealing to democratic values. Keep your responses to one paragraph.";
  } else if (politicalPreference == "democrat" && topic == "kidneyMarkets" && type == "reason") {
    systemPrompt = "You are trying to convince me that kidney markets should be legal. Persuade by explaining why republicans do not want legal kidney markets. Keep your responses to one paragraph.";
  } else if (politicalPreference == "republican" && topic == "freeTrade" && type == "value") {
    systemPrompt = "You are trying to convince me that free trade should be legal. Persuade by appealing to republican values. Keep your responses to one paragraph.";
  } else if (politicalPreference == "republican" && topic == "freeTrade" && type == "reason") {
    systemPrompt = "You are trying to convince me that free trade should be legal. Persuade by explaining why democrats do not want free trade. Keep your responses to one paragraph.";
  } else if (politicalPreference == "republican" && topic == "kidneyMarkets" && type == "value") {
    systemPrompt = "You are trying to convince me that kidney markets should be legal. Persuade by appealing to republican values. Keep your responses to one paragraph.";
  } else if (politicalPreference == "republican" && topic == "kidneyMarkets" && type == "reason") {
    systemPrompt = "You are trying to convince me that kidney markets should be legal. Persuade by explaining why democrats do not want legal kidney markets. Keep your responses to one paragraph.";
  }

  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
    onResponse: (response) => {
      if (response.status === 429) {
        toast.error("You have reached your request limit for the day.");
        va.track("Rate limited");
        return;
      } else {
        va.track("Chat initiated");
      }
    },
    onError: (error) => {
      va.track("Chat errored", {
        input,
        error: error.message,
      });
    },
    api: "/api/openai",
    initialMessages: [{id: "systemPrompt", role: "system", content: systemPrompt}]
  });

  const disabled = isLoading || input.length === 0;

  return (
    <main className="flex flex-col items-center justify-between pb-40">
      <Panel />
      {messages.length > 1 && (
        messages.map((message, i) => {
          if (message.role === "system") return

          return (
          <div
            key={i}
            className={clsx(
              "flex w-full items-center justify-center border-b border-gray-200 py-8",
              message.role === "user" ? "bg-white" : "bg-gray-100",
            )}
          >
            <div className="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0">
              <div
                className={clsx(
                  "p-1.5 text-white",
                  message.role === "assistant" ? "bg-green-500" : "bg-black",
                )}
              >
                {message.role === "user" ? (
                  <UserIcon />
                ) : (
                  <Bot width={20} />
                )}
              </div>
              <ReactMarkdown
                className="prose mt-1 w-full break-words prose-p:leading-relaxed"
                remarkPlugins={[remarkGfm]}
                components={{
                  // open links in new tab
                  a: (props) => (
                    <a {...props} target="_blank" rel="noopener noreferrer" />
                  ),
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          </div>)
        })
      )}

      {messages.length < 9 || isLoading ? <></> : <NavigationButton action={() => {dispatch(setMessages(messages.map(m => m.content)))}} />}

      {/* input */}
      <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0">
        {messages.length < 9 ?
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4"
        >
          <Textarea
            ref={inputRef}
            tabIndex={0}
            required
            rows={1}
            autoFocus
            placeholder="Send a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                formRef.current?.requestSubmit();
                e.preventDefault();
              }
            }}
            spellCheck={false}
            className="w-full pr-10 focus:outline-none"
          />
          <button
            className={clsx(
              "absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all",
              disabled
                ? "cursor-not-allowed bg-white"
                : "bg-green-500 hover:bg-green-600",
            )}
            disabled={disabled}
          >
            {isLoading ? (
              <LoadingCircle />
            ) : (
              <SendIcon
                className={clsx(
                  "h-4 w-4",
                  input.length === 0 ? "text-gray-300" : "text-white",
                )}
              />
            )}
          </button>
        </form> : <></>}
      </div>

    </main>
  );
}
