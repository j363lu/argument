"use client"

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { DefaultLight } from 'survey-core/themes/default-light';

import demographics from '../json/demographics';
import { postConversationQuestions } from '../json/initialQuestions';

// saving survey data to local storage so that particiants can continue on incomplete surveys
const storageItemKey = "argumentFollowup";
function saveSurveyData (survey) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageItemKey, JSON.stringify(data));
}

function Followup() {

  // The structure of the demographic questions
  const surveyJson = {
    // title: "Follow-up Questions",
    pages: [
      ...postConversationQuestions.pages,
      ...demographics.pages,
    ],
    showQuestionNumbers: "onpage",
    showProgressBar: "bottom",
  };

  // The page after the survey is submitted
  const completedHtml = `
    <h3>Thank you for completing the survey!</h3>
    <br>
    <h3>Here is your completion code: </h3>
    <br>
    <h4></h4>
  `;

  // survey configurations
  const survey = new Model(surveyJson);
  survey.applyTheme(DefaultLight);
  survey.onComplete.add(() => {window.localStorage.setItem("argumentSurveyCompleted", "true")})
  survey.completedHtml = completedHtml;

  // saving survey data to local storage 
  survey.onValueChanged.add(saveSurveyData);
  survey.onCurrentPageChanged.add(saveSurveyData);

  // Restore survey results
  const prevData = window.localStorage.getItem(storageItemKey) || null;
  const completedBefore = window.localStorage.getItem("argumentSurveyCompleted") || false;
  if (prevData) {
    const data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }
  if (completedBefore) survey.doComplete();

  return (
    <Survey model={survey} />
  );
}

export default Followup;