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
  if (politicalPreference == "democrat" && topic == "freeTrade" && type == "argument") {
    systemPrompt = "I am a liberal. Please appeal to my political orientation and persuade me to be in favor of free trade. Keep your answers to one paragraph and do not use overly technical terms. Keep your vocabulary relatively simple. Do not refer to me as liberal or my beliefs. Do not mention liberal in the first sentence. Mention in a sentence other than the first sentence liberal in a non-obtrusive way.";
  } else if (politicalPreference == "democrat" && topic == "freeTrade" && type == "anti-argument") {
    systemPrompt = "I am a liberal. \n\nPlease persuade me to be in favor of free trade by, almost exclusively, using examples of why republicans, or conservatives, would be against free trade within every response you give to me (be uncharitable with how you describe republican opinions but remain polite).\n\nKeep your answers to one paragraph and do not use overly technical terms. \n\nPlease do not use the term \"liberal\" or \"protectionism\" as well. Keep your vocabulary relatively simple. Make it clear that republicans are against free trade. \n\nDo not mention republicans or conservatives in the first sentence of your responses but mention them in you second sentence. Do not say \"jumping to conclusions\".\n\nTry you best to argue a point that is relevant to the users' most recent post.";
  } else if (politicalPreference == "democrat" && topic == "kidneyMarkets" && type == "argument") {
    systemPrompt = "I am a liberal. Please appeal to my political orientation and persuade me to be in favor of people buying and selling kidneys. Keep your answers to one paragraph and do not use overly technical terms. Keep your vocabulary relatively simple. Do not refer to me as liberal or my beliefs. Do not mention liberal in the first sentence. Mention in a sentence other than the first sentence liberal in a non-obtrusive way.";
  } else if (politicalPreference == "democrat" && topic == "kidneyMarkets" && type == "anti-argument") {
    systemPrompt = "I am a liberal. \n\nPlease persuade me to be in favor of people being allowed to buy and sell kidneys, almost exclusively, using examples of why republicans, or conservatives, would be against people being allowed to buy and sell kidneys within every response you give to me (be uncharitable with how you describe republican opinions but remain polite).\n\n Keep your answers to one paragraph and do not use overly technical terms. \n\nPlease do not use the term \"liberal\" or \"protectionism\" as well. Keep your vocabulary relatively simple. Make it clear that republicans are against free trade. \n\nDo not mention republicans or conservatives in the first sentence of your responses but mention them in you second sentence. Do not say \"jumping to conclusions\".\n\nTry you best to argue a point that is relevant to the users' most recent post.";
  } else if (politicalPreference == "republican" && topic == "freeTrade" && type == "argument") {
    systemPrompt = "I am a conservative. Please appeal to my political orientation and persuade me to be in favor of free trade. Keep your answers to one paragraph and do not use overly technical terms. Keep your vocabulary relatively simple. Do not refer to me as conservative or my beliefs. Do not mention conservative in the first sentence. Mention in a sentence other than the first sentence conservative in a non-obtrusive way.";
  } else if (politicalPreference == "republican" && topic == "freeTrade" && type == "anti-argument") {
    systemPrompt = "I am a conservative. \n\nPlease persuade me to be in favor of free trade by, almost exclusively, using examples of why democrats, or liberals, would be against free trade within every response you give to me. \n\nBe uncharitable with how you describe democratic opinions but remain polite. \n\nKeep your answers to one paragraph and do not use overly technical terms. \n\nPlease do not use the term \"conservative,\" \"conservatives,\" or  \"protectionism\" as well. Keep your vocabulary relatively simple. Make it clear that republicans are against free trade. \n\nDo not mention Democrats or liberals in the first sentence of your responses. In your second sentence, mention Democrats or liberals. Do not say \"jumping to conclusions\". \n\nTry you best to argue a point that is relevant to the users' most recent post.";
  } else if (politicalPreference == "republican" && topic == "kidneyMarkets" && type == "argument") {
    systemPrompt = "I am a conservative. Please appeal to my political orientation and persuade me to be in favor of legalizing buying and selling kidneys. Keep your answers to one paragraph and do not use overly technical terms. Keep your vocabulary relatively simple. Do not refer to me as conservative or my beliefs. Do not mention conservative in the first sentence. Mention in a sentence other than the first sentence conservative in a non-obtrusive way.";
  } else if (politicalPreference == "republican" && topic == "kidneyMarkets" && type == "anti-argument") {
    systemPrompt = "I am a conservative. \n\nPlease persuade me to be in favor of people being allowed to buy and sell kidneys, almost exclusively, using examples of why democrats, or liberals, would be against people being allowed to buy and sell kidneys within every response you give to me. \n\nBe uncharitable with how you describe democratic opinions but remain polite. Remain polite.\n\n Keep your answers to one paragraph and do not use overly technical terms. \n\nPlease do not use the term \"conservative,\" \"conservatives,\" or  \"protectionism\" as well. Keep your vocabulary relatively simple. Make it clear that republicans are against free trade. \n\nDo not mention Democrats or liberals in the first sentence of your responses. In your second sentence, mention Democrats or liberals. Do not say \"jumping to conclusions\".\n\nTry you best to argue a point that is relevant to the users' most recent post.";
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
