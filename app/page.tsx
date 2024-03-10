"use client"

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { selectPage } from "@/lib/pageSlice";
import { setType, types } from "@/lib/typeSlice";
import { setID } from "@/lib/idSlice";

import { randomChoice } from "@/lib/helperFuncs";

import Consent from "./pages/Consent";
import InitialQuestions from "./pages/InitialQuestions";
import Chat from "./pages/Chat";
import Control from "./pages/Control";
import Followup from "./pages/Followup";

function Survey() {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  // define the pages in the survey
  const [pages, setPages] = useState([
    <Consent key="consent" />,
    <InitialQuestions key="initialQuestions" />,
    <Chat key="chat" />,
    <Followup key="followup" />
  ]);

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

    if (t == "control") {
      setPages([
        <Consent key="consent" />,
        <InitialQuestions key="initialQuestions" />,
        <Control key="control" />,
        <Followup key="followup" />        
      ]);
    }

    let id = urlParams.get("id");

    console.log(id);

    if (id !== null) {
      dispatch(setID(id));
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