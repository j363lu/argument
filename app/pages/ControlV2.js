"use client"

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { DefaultLight } from 'survey-core/themes/default-light';

import { freeTradeControl, kidneyMarketsControl } from '../json/controlV2';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { incrementPage } from '@/lib/pageSlice';
import { selectId } from '@/lib/idSlice';
import { selectTopic } from '@/lib/typeSlice';

import { useEffect, useRef } from 'react';

// server location
const controlServer = "https://artsresearch.uwaterloo.ca/~dicelab/argument-backend/php/saveControlV2.php"; 

// saving survey data to local storage so that particiants can continue on incomplete surveys
// const storageItemKey = "initialQuestions";
// function saveSurveyData (survey) {
//     const data = survey.data;
//     data.pageNo = survey.currentPageNo;
//     window.localStorage.setItem(storageItemKey, JSON.stringify(data));
// }

function ControlV2() {
  const id = useAppSelector(selectId);
  const topic = useAppSelector(selectTopic);
  const elementRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  // post data to a specified url
  const postFormData = (url, formdata) => {
    fetch(url, {
      method: "POST",
      body: formdata
    })
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });  
  }

  useEffect(() => {
    const disableCopyPaste = (e) => {
      e.preventDefault();
      alert('Copying and pasting are disabled.');
    };

    const element = elementRef.current;

    if (element) {
      element.addEventListener('copy', disableCopyPaste);
      element.addEventListener('paste', disableCopyPaste);
    }

    return () => {
      if (element) {
        element.removeEventListener('copy', disableCopyPaste);
        element.removeEventListener('paste', disableCopyPaste);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const complete = (sender) => {
    console.log(sender.data);

    let fd = new FormData();
    fd.append("data", JSON.stringify(sender.data));   // FormData to send to server
    fd.append("id", id);                              // add ID to the data to send  

    postFormData(controlServer, fd);

    dispatch(incrementPage());
  }

  // The structure of the control questions
  const surveyJson = {
    pages: [
      ...(topic == "freeTrade" ? freeTradeControl.pages : kidneyMarketsControl.pages),
    ],
    showQuestionNumbers: "onpage",
  };

  // survey configurations
  const survey = new Model(surveyJson);
  survey.applyTheme(DefaultLight);
  survey.onComplete.add(complete);

  // length between 50 words to 200 words
  survey.onValidateQuestion.add((survey, options) => {
    if (options.name === "Control") {
      const minWord = 50;
      const maxWord = 200;
      const wordCount = options.value.trim().split(/\s+/).length;
      if (wordCount < minWord || wordCount > maxWord) {
        options.error = `Please keep your response between 50-200 words. Your response is ${wordCount} words`
      }
    }
  });

  // saving survey data to local storage 
  // survey.onValueChanged.add(saveSurveyData);
  // survey.onCurrentPageChanged.add(saveSurveyData);

  // Restore survey results
  // const prevData = window.localStorage.getItem(storageItemKey) || null;
  // if (prevData) {
  //   const data = JSON.parse(prevData);
  //   survey.data = data;
  //   if (data.pageNo) {
  //     survey.currentPageNo = data.pageNo;
  //   }
  // }

  return (
    <div ref={elementRef}>
      <Survey model={survey} />
    </div>
  );
}

export default ControlV2;