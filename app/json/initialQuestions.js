// initial questions before conversation
const questions =[
  "How would you rate your feelings towards kidney markets",
  "How socially liberal are you?",
  "How socially conservative are you?",
  "How fiscally liberal are you?",
  "How fiscally conservative are you?"
];

// common attributes for all the rating questioins
const questionTemplate = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
}


// The structure of the initial questions
export const initialQuestions = {
  pages: [{
    title: "Rating questions",
    description: "Please first complete the following questions",
    elements: [{
      name: "initial1",
      title: questions[0],
      mininumRateDescription: "Never legalize it",
      maximumRateDescription: "Legalize it now",
      ...questionTemplate
    },{
      name: "initial2",
      title: questions[1],
      mininumRateDescription: "Not socially liberal",
      maximumRateDescription: "Very socially liberal",
      ...questionTemplate
    },{
      name: "initial3",
      title: questions[2],
      mininumRateDescription: "Not socially conservative",
      maximumRateDescription: "Very socially conservative",
      ...questionTemplate
    },{
      name: "initial4",
      title: questions[3],
      mininumRateDescription: "Not fiscally liberal",
      maximumRateDescription: "Very fiscally liberal",
      ...questionTemplate
    },{
      name: "initial5",
      title: questions[4],
      mininumRateDescription: "Not fiscally conservative",
      maximumRateDescription: "Very fiscally conservative",
      ...questionTemplate
    }],  
  }],
};

export const postConversationQuestions = {
  pages: [{
    title: "Rating questions",
    description: "Please complete the following questions",
    elements: [{
      name: "postConversation1",
      title: questions[0],
      mininumRateDescription: "Never legalize it",
      maximumRateDescription: "Legalize it now",
      ...questionTemplate
    },{
      name: "postConversation2",
      title: questions[1],
      mininumRateDescription: "Not socially liberal",
      maximumRateDescription: "Very socially liberal",
      ...questionTemplate
    },{
      name: "postConversation3",
      title: questions[2],
      mininumRateDescription: "Not socially conservative",
      maximumRateDescription: "Very socially conservative",
      ...questionTemplate
    },{
      name: "postConversation4",
      title: questions[3],
      mininumRateDescription: "Not fiscally liberal",
      maximumRateDescription: "Very fiscally liberal",
      ...questionTemplate
    },{
      name: "postConversation5",
      title: questions[4],
      mininumRateDescription: "Not fiscally conservative",
      maximumRateDescription: "Very fiscally conservative",
      ...questionTemplate
    }],  
  }],
};
