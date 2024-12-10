"use client"

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { DefaultLight } from 'survey-core/themes/default-light';

import { useAppSelector } from '@/lib/hooks';
import { selectCompletionCode, selectId } from '@/lib/idSlice';
import { selectStartTime, torontoTime } from '@/lib/timeSlice';

import { freeTrade, kidneyMarkets } from "../json/part2";

// server location
const part2Server = "https://artsresearch.uwaterloo.ca/~dicelab/argument-backend/php/savePart2V2.php"; 

function Part2({ topic }) {
  const id = useAppSelector(selectId);
  const completionCode = useAppSelector(selectCompletionCode);
  const startTime = useAppSelector(selectStartTime);

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

  const complete = (sender) => {
    console.log(sender.data);

    let fd = new FormData();
    fd.append("data", JSON.stringify(sender.data));   // FormData to send to server
    fd.append("id", id);                              // add ID to the data to send  
    fd.append("completionCode", completionCode);
    fd.append("topic", topic); 
    fd.append("startTime", startTime);                // start time of the survey
    fd.append("endTime", torontoTime(Date.now().toString()));         // end time of the survey  

    postFormData(part2Server, fd);
  }  

  // The structure of the demographic questions
  const surveyJson = {
    // title: "Follow-up Questions",
    pages: [
      ...(topic == "freeTrade" ? freeTrade.pages : kidneyMarkets.pages),
    ],
    showQuestionNumbers: "onpage",
    showProgressBar: "bottom"
  };

  // The page after the survey is submitted
  const completedHtml = `
    <h3>Thank you for completing the survey!</h3>
    <br>
    <h3>Here is your completion code: </h3>
    <br>
    <h4>${completionCode}</h4>
    <br>
    <h3>Click <a href="/debriefing2" target="_blank">here</a> for more information about the study in a new tab</h3>
  `;

  // survey configurations
  const survey = new Model(surveyJson);
  survey.applyTheme(DefaultLight);
  survey.completedHtml = completedHtml;
  survey.onComplete.add(complete);

  // length between 10 words to 50 words
  survey.onValidateQuestion.add((survey, options) => {
    if (options.name === "argumentPart1") {
      const minWord = 10;
      const maxWord = 50;
      const wordCount = options.value.trim().split(/\s+/).length;
      if (wordCount < minWord || wordCount > maxWord) {
        options.error = `Please keep your response between 10-50 words. Your response is ${wordCount} words`
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
    <Survey model={survey} />
  );  
}

export default Part2;