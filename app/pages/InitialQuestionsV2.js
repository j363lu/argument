"use client"

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { DefaultLight } from 'survey-core/themes/default-light';

import { initialQuestionsV2, freeTrade, kidneyMarkets } from '../json/initialQuestionsV2';

import { useAppSelector } from '@/lib/hooks';
import { useAppDispatch } from '@/lib/hooks';
import { incrementPage } from '@/lib/pageSlice';
import { selectId } from '@/lib/idSlice';
import { selectTopic, setPoliticalPreference } from '@/lib/typeSlice';

// server location
const initialQuestionsServer = "https://artsresearch.uwaterloo.ca/~dicelab/argument-backend/php/saveInitialQuestionsV2.php"; 

// saving survey data to local storage so that particiants can continue on incomplete surveys
// const storageItemKey = "initialQuestions";
// function saveSurveyData (survey) {
//     const data = survey.data;
//     data.pageNo = survey.currentPageNo;
//     window.localStorage.setItem(storageItemKey, JSON.stringify(data));
// }

function InitialQuestionsV2() {
  const id = useAppSelector(selectId);
  const topic = useAppSelector(selectTopic);
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
    
    // set politicalPreference
    if (sender.data.politicalScale == "1" || sender.data.politicalScale == "2" || sender.data.politicalScale == "3") {
      dispatch(setPoliticalPreference("democrat"));
    } else {
      dispatch(setPoliticalPreference("republican"));
    }
    
    postFormData(initialQuestionsServer, fd);

    dispatch(incrementPage());
  }

  // The structure of the demographic questions
  let surveyJson = {
    pages: [
      ...initialQuestionsV2.pages,
      ...(topic == "freeTrade" ? freeTrade.pages : kidneyMarkets.pages),
    ],
    showQuestionNumbers: "onpage",
    showProgressBar: "bottom",
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

export default InitialQuestionsV2;