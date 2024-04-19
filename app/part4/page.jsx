"use client"

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { selectPart4Page } from "@/lib/pageSlice";
import { setID } from "@/lib/idSlice";

import Consent from "./Consent";
import Part4 from "./Part4";

function Survey() {
  const page = useAppSelector(selectPart4Page);
  const dispatch = useAppDispatch();

  // define the pages in the survey
  const [pages] = useState([
    <Consent key="consent" />,
    <Part4 key="part4" />
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