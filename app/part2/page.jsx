"use client"

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { selectPart2Page } from "@/lib/pageSlice";
import { setID } from "@/lib/idSlice";
import { types, setPart2Type } from "@/lib/typeSlice";

import Consent from "./Consent";
import Part2 from "./Part2";

function Survey() {
  const page = useAppSelector(selectPart2Page);
  const dispatch = useAppDispatch();

  // define the pages in the survey
  const [pages] = useState([
    <Consent key="consent" />,
    <Part2 key="part2" />
  ]);

  // set the type
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");

    console.log(id);

    if (id !== null) {
      dispatch(setID(id));
    }

    let t = urlParams.get("type");
    if (types.includes(t)) {
      dispatch(setPart2Type(t));
    } else {
      dispatch(setPart2Type("emotional"));        
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