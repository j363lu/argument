// common attributes for all the rating questioins
const rating9 = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
}

const rating6 = {
  type: "rating",
  rateCount: 6,
  rateMin: 1,
  rateMax: 6,
  isRequired: true,
}


// The structure of the initial questions
export const initialQuestionsV2 = {
  pages: [{
    // title: "Rating questions",
    // description: "Please first complete the following questions",
    elements: [{
      name: "mturkID",
      title: "Please enter your MTurk ID",
      type: "comment",
      isRequired: true,
    }],  
  }, {
    // title: "title",
    elements: [{
      name: "economic",
      title: "How liberal or conservative do you consider yourself to be when it comes to economic issues (e.g., taxes, regulations, and government spending)?",
      description: "1 = strongly liberal, 2 = mostly liberal, 3 = leans liberal, 4 = leans conservative, 5 = mostly conservative, 6 = strongly conservative",
      mininumRateDescription: "strongly liberal",
      maximumRateDescription: "strongly conservative",
      ...rating6
    }, {
      name: "social",
      title: "How liberal or conservative do you consider yourself to be when it comes to social issues (e.g., abortion, LGBT issues, and freedom of speech)?",
      description: "1 = strongly liberal, 2 = mostly liberal, 3 = leans liberal, 4 = leans conservative, 5 = mostly conservative, 6 = strongly conservative",
      mininumRateDescription: "strongly liberal",
      maximumRateDescription: "strongly conservative",
      ...rating6
    }, {
      name: "opinionDemocrats",
      title: "What is your opinion on people who vote for democrats?",
      description: "1 = unfavorably, 9 = favorably",
      mininumRateDescription: "unfavorably",
      maximumRateDescription: "favorably",
      ...rating9
    }, {
      name: "opinionRepublicans",
      title: "What is your opinion on people who vote for republicans?",
      description: "1 = unfavorably, 9 = favorably",
      mininumRateDescription: "unfavorably",
      maximumRateDescription: "favorably",
      ...rating9
    }, {
      name: "politicalScale",
      title: "Do you identify more with democrat or republican values overall?",
      description: "1 = strongly democrat, 2 = mostly democrat, 3 = leans democrat, 4 = leans republican, 5 = mostly republican, 6 = strongly republican",
      mininumRateDescription: "strongly democrat",
      maximumRateDescription: "strongly republican",
      ...rating6
    }]
  }],
};

export const freeTrade = {
  pages: [{
    // title: "Rating questions",
    // description: "Please first complete the following questions",
    elements: [{
      name: "topicOpinion",
      title: "The United States should adopt free trade agreements with other countries.",
      description: "(A free trade agreement is a pact between two or more nations to reduce barriers to imports and exports among them. Under a free trade policy, goods and services can be bought and sold across international borders with little or no government tariffs, quotas, subsidies, or prohibitions to inhibit their exchange.)",
      mininumRateDescription: "fully disagree",
      maximumRateDescription: "fully agree",
      ...rating9
    }, {
      name: "topicThought",
      title: "How much have you thought about free trade agreements before?",
      description: "1 = not at all, 9 = a lot",
      mininumRateDescription: "not at all",
      maximumRateDescription: "a lot",
      ...rating9
    }],  
  }],
};

export const kidneyMarkets = {
  pages: [{
    // title: "Rating questions",
    // description: "Please first complete the following questions",
    elements: [{
      name: "topicOpinion",
      title: "The United States should make it legal for people to buy and sell their kidneys if they wish.",
      description: "1 = fully disagree, 9 = fully agree",
      mininumRateDescription: "fully disagree",
      maximumRateDescription: "fully agree",
      ...rating9
    }, {
      name: "topicThought",
      title: "How much have you thought about the ability to legally buy or sell kidneys before?",
      description: "1 = not at all, 9 = a lot",
      mininumRateDescription: "not at all",
      maximumRateDescription: "a lot",
      ...rating9
    }],  
  }],
};
