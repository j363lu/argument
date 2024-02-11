// initial questions before conversation
const questions =[
  "What is your attitude towards the idea of a society where individuals can buy and sell kidneys legally?",
  // "How socially liberal are you?",
  // "How socially conservative are you?",
  // "How fiscally liberal are you?",
  // "How fiscally conservative are you?"
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
      mininumRateDescription: "completely against",
      maximumRateDescription: "completely for",
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
    }],  
  }],
};
