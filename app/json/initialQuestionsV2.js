// common attributes for all the rating questioins
const questionTemplate = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
}


// The structure of the initial questions
export const initialQuestionsV2 = {
  pages: [{
    title: "Rating questions",
    // description: "Please first complete the following questions",
    elements: [{
      name: "tax",
      title: "Do you think democrats or republicans politicians tax and spend better?",
      description: "1 = democrats tax and spend better, 9 = republicans tax and spend better",
      mininumRateDescription: "Democrats tax and spend better",
      maximumRateDescription: "Republicans tax and spend better",
      ...questionTemplate
    }, {
      name: "treatPeople",
      title: "Do you agree with democrats or republicans on how we should treat people?",
      description: "1 = I agree with how democrats on how we should treat people, 9 = I agree with republicans on how we should treat people",
      mininumRateDescription: "I agree with democrats",
      maximumRateDescription: "I agree with republicans",
      ...questionTemplate
    }, {
      name: "voteDemocrats",
      title: "What is your opinion on people who vote for democrats?",
      description: "1 = unfavorably, 9 = favorably",
      mininumRateDescription: "unfavorably",
      maximumRateDescription: "favorably",
      ...questionTemplate
    }, {
      name: "voteRepublicans",
      title: "What is your opinion on people who vote for republicans?",
      description: "1 = unfavorably, 9 = favorably",
      mininumRateDescription: "unfavorably",
      maximumRateDescription: "favorably",
      ...questionTemplate
    }],  
  }],
};

export const freeTrade = {
  name: "topic",
  title: "How favorably do you look at free trade?",
  description: "1 = unfavorably, 9 = favorably",
  mininumRateDescription: "unfavorably",
  maximumRateDescription: "favorably",
  ...questionTemplate
};

export const kidneyMarkets = {
  name: "topic",
  title: "How favorably do you look at kidney markets?",
  description: "1 = unfavorably, 9 = favorably",
  mininumRateDescription: "unfavorably",
  maximumRateDescription: "favorably",
  ...questionTemplate
};

export const politicalScale = {
  name: "politicalScale",
  title: "Do you identify more with democrat or republican values overall?",
  description: "1 = very democrat, 4 = very republican",
  mininumRateDescription: "very democrat",
  maximumRateDescription: "very republican",

  type: "rating",
  rateCount: 4,
  rateMin: 1,
  rateMax: 4,
  isRequired: true,
};
