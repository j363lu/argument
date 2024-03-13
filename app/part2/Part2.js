"use client"

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { PlainLight } from 'survey-core/themes/plain-light';

import { useAppSelector } from '@/lib/hooks';
import { selectCompletionCode, selectId } from '@/lib/idSlice';
import { selectPart2Type } from '@/lib/typeSlice';

import part2 from "../json/part2";

// server location
const part2Server = "https://artsresearch.uwaterloo.ca/~dicelab/argument-backend/php/savePart2.php"; 

function Part2() {
  const id = useAppSelector(selectId);
  const type = useAppSelector(selectPart2Type);
  const completionCode = useAppSelector(selectCompletionCode);

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

    postFormData(part2Server, fd);
  }  

  // The structure of the demographic questions
  const surveyJson = {
    // title: "Follow-up Questions",
    pages: [
      part2.pages[0],
      (type != "control" ? part2.pages[1] : {}),
    ],
    showQuestionNumbers: "onpage",
    showProgressBar: "bottom",
    showPrevButton: false
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
  survey.applyTheme(PlainLight);
  survey.completedHtml = completedHtml;
  survey.onComplete.add(complete);

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