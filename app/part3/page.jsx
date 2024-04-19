"use client"

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { selectPart3Page } from "@/lib/pageSlice";
import { setID } from "@/lib/idSlice";

import Consent from "./Consent";
import Part3 from "./Part3";

function Survey() {
  const page = useAppSelector(selectPart3Page);
  const dispatch = useAppDispatch();

  // define the pages in the survey
  const [pages] = useState([
    <Consent key="consent" />,
    <Part3 key="part3" />
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