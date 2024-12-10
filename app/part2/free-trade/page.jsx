"use client"

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { selectPart2Page } from "@/lib/pageSlice";
import { setID } from "@/lib/idSlice";

import Consent from "../Consent";
import Part2 from "../Part2";

function Survey() {
  const page = useAppSelector(selectPart2Page);
  const dispatch = useAppDispatch();

  // define the pages in the survey
  const [pages] = useState([
    <Consent key="consent" />,
    <Part2 key="part2" topic="freeTrade"/>
  ]);

  // set the type
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
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