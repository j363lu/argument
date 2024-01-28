"use client"

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { selectPage } from "@/lib/pageSlice";
import { setType, types } from "@/lib/typeSlice";

import { randomChoice } from "@/lib/helperFuncs";

import Consent from "./pages/Consent";
import InitialQuestions from "./pages/InitialQuestions";
import Chat from "./pages/Chat";
import Followup from "./pages/Followup";

function Survey() {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  // define the pages in the survey
  const pages = [
    <Consent key="consent" />,
    <InitialQuestions key="initialQuestions" />,
    <Chat key="chat" />,
    <Followup key="followup" />
  ]

  // set the type
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let t = randomChoice(urlParams.getAll("type"));

    if (types.includes(t)) {
      dispatch(setType(t));
    } else {
      const randomType = randomChoice(types);
      dispatch(setType(randomType));      
      t = randomType;      
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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