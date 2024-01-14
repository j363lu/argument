import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { DefaultLight } from 'survey-core/themes/default-light';

import { initialQuestions } from '../json/initialQuestions';

import { useAppDispatch } from '@/lib/hooks';
import { incrementPage } from '@/lib/pageSlice';

// saving survey data to local storage so that particiants can continue on incomplete surveys
const storageItemKey = "initialQuestions";
function saveSurveyData (survey) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageItemKey, JSON.stringify(data));
}

function InitialQuestions() {
  const dispatch = useAppDispatch();

  const complete = (sender) => {
    console.log(sender.data);

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
  survey.onValueChanged.add(saveSurveyData);
  survey.onCurrentPageChanged.add(saveSurveyData);

  // Restore survey results
  const prevData = window.localStorage.getItem(storageItemKey) || null;
  if (prevData) {
    const data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }

  return (
    <Survey model={survey} />
  );
}

export default InitialQuestions;