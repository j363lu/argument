"use client"

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { selectPage } from "@/lib/pageSlice";
import { setTopic, topics, types, setType } from "@/lib/typeSlice";
import { setID } from "@/lib/idSlice";

import { randomChoice } from "@/lib/helperFuncs";

import Consent from "./pages/Consent";
import InitialQuestionsV2 from "./pages/InitialQuestionsV2";
import Chat from "./pages/Chat";
import ControlV2 from "./pages/ControlV2";
import FollowupV2 from "./pages/FollowupV2";

function Survey() {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  // define the pages in the survey
  const [pages, setPages] = useState([
    <Consent key="consent" />,
    <InitialQuestionsV2 key="initialQuestions" />,
    <Chat key="chat" />,
    <FollowupV2 key="followup" />
  ]);

  // set the type and topic
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let t = randomChoice(urlParams.getAll("type"));
    let topic = randomChoice(urlParams.getAll("topic"));

    // set type
    if (types.includes(t)) {
      dispatch(setType(t));
    } else {
      const randomType = randomChoice(types);
      dispatch(setType(randomType));      
      t = randomType;      
    }

    // set topic
    if (topics.includes(topic)) {
      dispatch(setTopic(topic));
    } else {
      const randomTopic = randomChoice(topics);
      dispatch(setTopic(randomTopic));
    }

    if (t == "control") {
      setPages([
        <Consent key="consent" />,
        <InitialQuestionsV2 key="initialQuestions" />,
        <ControlV2 key="control" />,
        <FollowupV2 key="followup" />        
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