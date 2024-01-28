"use client"

import { useAppSelector } from "@/lib/hooks";
import { selectPage } from "@/lib/pageSlice";

import Consent from "./pages/Consent";
//import InitialQuestions from "./pages/InitialQuestions";
import Chat from "./pages/Chat";

function Survey() {
  const page = useAppSelector(selectPage);

  // define the pages in the survey
  const pages = [
    <Consent key="consent" />,
    //<InitialQuestions key="initialQuestions" />,
    <Chat key="chat" />,
  ]

  return (
    <div id="survey">
      {pages.map((p, index) => {
        return (
          <div style={page === index ? {} : {display: "none"}} key={index}>
            {p}
          </div>
      );
      })}
    </div>
  );
}

export default Survey;