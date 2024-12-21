"use client"

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { DefaultLight } from 'survey-core/themes/default-light';

import { followupV2, postFreeTrade, postKidneyMarkets, sex } from '../json/followupV2';

import { useAppSelector } from '@/lib/hooks';
import { selectCompletionCode, selectId } from '@/lib/idSlice';
import { selectTopic, selectPoliticalPreference, selectType } from '@/lib/typeSlice';
import { selectStartTime, torontoTime } from '@/lib/timeSlice';
import { selectMessages } from '@/lib/messagesSlice';

import { marked } from "marked";

const renderer = {
  image: function (src, _, alt) {
    src = src.href || src;
    const sizeStr = ',size=';
    let i = src.indexOf(sizeStr);
    let height = '';
    let width = '';
    if (i > -1) {
      let str = src.substring(i + sizeStr.length);
      src = src.substring(0, i);
      i = str.indexOf('x');
      if (i > -1) {
        height = str.substring(0, i) + 'px';
        width = str.substring(i + 1) + 'px';
      }
    }
    let res = '<img src="' + src + '" alt="' + alt;
    if (height) res += '" height="' + height;
    if (width) res += '" width="' + width;
    return res + '">';
  }
};

marked.use({ renderer });


// server location
const followupServer = "https://artsresearch.uwaterloo.ca/~dicelab/argument-backend/php/saveFollowupV2.php"; 
const controlServer = "https://artsresearch.uwaterloo.ca/~dicelab/argument-backend/php/saveControlV2.php"; 

// saving survey data to local storage so that particiants can continue on incomplete surveys
// const storageItemKey = "argumentFollowup";
// function saveSurveyData (survey) {
//     const data = survey.data;
//     data.pageNo = survey.currentPageNo;
//     window.localStorage.setItem(storageItemKey, JSON.stringify(data));
// }

function FollowupV2() {
  const id = useAppSelector(selectId);
  const completionCode = useAppSelector(selectCompletionCode);
  const topic = useAppSelector(selectTopic);
  const type = useAppSelector(selectType);
  const politicalPreference = useAppSelector(selectPoliticalPreference);
  const startTime = useAppSelector(selectStartTime);
  const messages = useAppSelector(selectMessages);

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
    fd.append("topic", topic);                          // add topic to the data
    fd.append("type", type);                          // add type to the data
    fd.append("politicalPreference", politicalPreference);  // add political preference to the data
    fd.append("startTime", startTime);                // start time of the survey
    fd.append("completionCode", completionCode);
    fd.append("endTime", torontoTime(Date.now().toString()));         // end time of the survey  
    fd.append("messages", JSON.stringify(messages));

    postFormData(followupServer, fd);

    // send to controlServer
    let fd2 = new FormData();
    fd2.append("data", JSON.stringify({"Control": ""}));
    fd2.append("id", id);
    postFormData(controlServer, fd2);

  }  

  // The structure of the followup questions
  const surveyJson = {
    // title: "Follow-up Questions",
    description: "For each sentence below, please select how uncharacteristic or characteristic (5-point scale) this is for you personally.",
    pages: [
      ...followupV2.pages,
      ...(topic == "freeTrade" ? postFreeTrade.pages : postKidneyMarkets.pages),
      {
        elements: [{
          name: "writingImpact",
          title: `Writing about ${topic == "freeTrade" ? "free trade agreement" : "the ability to legally buy or sell kidneys"} made you...`,      
          type: "rating",
          rateCount: 5,
          rateMin: 1,
          rateMax: 5,
          isRequired: true,
          description: "1 = Much more democratic, 3 = No change, 5 = Much more republican",
          mininumRateDescription: "Much more democratic",
          maximumRateDescription: "Much more republican",
        }]
      },
      ...sex.pages
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
    <h3>Click <a href="/debriefing" target="_blank">here</a> for more information about the study in a new tab</h3>
  `;

  // survey configurations
  const survey = new Model(surveyJson);
  survey.applyTheme(DefaultLight);
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

  survey.onTextMarkdown.add((_, options) => {
    // Convert Markdown to HTML
    let str = marked(options.text);
    // ...
    // Sanitize the HTML markup using a third-party library here
    // ...
    // Remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 5);
    // Set HTML markup to render
    options.html = str;
  });  


  return (
    <Survey model={survey} />
  );
}

export default FollowupV2;