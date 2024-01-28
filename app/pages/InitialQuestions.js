"use client"

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { DefaultLight } from 'survey-core/themes/default-light';

import { initialQuestions } from '../json/initialQuestions';

import { useAppSelector } from '@/lib/hooks';
import { useAppDispatch } from '@/lib/hooks';
import { incrementPage } from '@/lib/pageSlice';
import { selectId } from '@/lib/idSlice';

// server location
const initialQuestionsServer = "https://artsresearch.uwaterloo.ca/~dicelab/argument-backend/php/saveInitialQuestions.php"; 

// saving survey data to local storage so that particiants can continue on incomplete surveys
// const storageItemKey = "initialQuestions";
// function saveSurveyData (survey) {
//     const data = survey.data;
//     data.pageNo = survey.currentPageNo;
//     window.localStorage.setItem(storageItemKey, JSON.stringify(data));
// }

function InitialQuestions() {
  const id = useAppSelector(selectId);
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

  const complete = (sender) => {
    console.log(sender.data);

    let fd = new FormData();
    fd.append("data", JSON.stringify(sender.data));   // FormData to send to server
    fd.append("id", id);                              // add ID to the data to send  

    postFormData(initialQuestionsServer, fd);

    dispatch(incrementPage());
  }

  // The structure of the demographic questions
  const surveyJson = {
    pages: [
      ...initialQuestions.pages,
    ],
    showQuestionNumbers: "onpage",
  };

  // survey configurations
  const survey = new Model(surveyJson);
  survey.applyTheme(DefaultLight);
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

export default InitialQuestions;