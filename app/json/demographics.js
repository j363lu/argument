// This file contains data for the demographics page 

// The structure of the demographic questions
const demographics = {
  pages: [{
    title: "Demographic Questions",
    description: "You may decline to answer any questions that you do not wish to answer by leaving them blank",
    elements: [{
      name: "Age",
      title: "Age",
      description: "What is your age?",
      type: "text",
      inputType: "number",
      min: 0,
      max: 150,
    }, {
      name: "Sex",
      title: "Sex",
      description: "What is your sex?",
      type: "radiogroup",
      choices: [
        "Male", "Female", "Prefer not to say"
      ],
      showOtherItem: true      
    }, {
      name: "Education",
      title: "Education",
      description: "What is the highest degree or level of education you have completed?",
      type: "radiogroup"    ,
      choices: [
        "Less than a high school diploma", "High school diploma or equivalent", "Non-university diploma/certificate", "Bachelor's degree", "Master's degree", "Doctorate"
      ]   
    }, {
      name: "Major",
      title: "Major(s)",
      description: "What was/is your post-secondary major (in the event that you have completed or are enrolled in post-secondary education)?",
      type: "text",
      maxLength: 100         
    }, {
      name: "Income",
      title: "Income",
      description: "What is your average annual household income (rounded to the nearest thousand)?",
      type: "text",
      inputType: "number",
      min: 0           
    }, {
      name: "Occupation",
      title: "Occupation",      
      description: "What is your occupation?",
      type: "text",
      maxLength: 100         
    }, {
      name: "Social",
      title: "Socially conservative/liberal",
      description: "How socially conservative/liberal are you?",
      type: "rating",
      rateCount: 9,
      rateMin: 1,
      rateMax: 9,
      mininumRateDescription: "conservative",
      maximumRateDescription: "liberal",
    }, {
      name: "Fiscal",
      title: "Fiscally conservative/liberal",
      description: "How fiscally conservative/liberal are you?",
      type: "rating",
      rateCount: 9,
      rateMin: 1,
      rateMax: 9,
      mininumRateDescription: "conservative",
      maximumRateDescription: "liberal",
    }]
  }],
};

export default demographics;