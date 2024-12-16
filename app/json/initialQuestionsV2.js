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
      type: "text",
      isRequired: true,
    }],  
  }, {
    // title: "title",
    elements: [{
      name: "economic",
      title: "How liberal or conservative do you consider yourself to be when it comes to economic issues (e.g., taxes, regulations, and government spending)?",
      description: "1 = Strongly liberal, 2 = Mostly liberal, 3 = Leans liberal, 4 = Leans conservative, 5 = Mostly conservative, 6 = Strongly conservative",
      mininumRateDescription: "Strongly liberal",
      maximumRateDescription: "Strongly conservative",
      ...rating6
    }, {
      name: "social",
      title: "How liberal or conservative do you consider yourself to be when it comes to social issues (e.g., abortion, LGBT issues, and freedom of speech)?",
      description: "1 = Strongly liberal, 2 = Mostly liberal, 3 = Leans liberal, 4 = Leans conservative, 5 = Mostly conservative, 6 = Strongly conservative",
      mininumRateDescription: "Strongly liberal",
      maximumRateDescription: "Strongly conservative",
      ...rating6
    }, {
      name: "opinionDemocrats",
      title: "What is your opinion on people who vote for democrats?",
      description: "1 = Unfavorable, 6 = Favorable",
      mininumRateDescription: "Unfavorable",
      maximumRateDescription: "Favorable",
      ...rating6
    }, {
      name: "opinionRepublicans",
      title: "What is your opinion on people who vote for republicans?",
      description: "1 = Unfavorable, 6 = Favorable",
      mininumRateDescription: "Unfavorable",
      maximumRateDescription: "Favorable",
      ...rating6
    }, {
      name: "politicalScale",
      title: "Do you identify more with democrats or republican values overall?",
      description: "1 = Strongly democratic, 2 = Mostly democratic, 3 = Leans democratic, 4 = Leans republican, 5 = Mostly republican, 6 = Strongly republican",
      mininumRateDescription: "Strongly democratic",
      maximumRateDescription: "Strongly republican",
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
      mininumRateDescription: "Fully disagree",
      maximumRateDescription: "Fully agree",
      ...rating9
    }],  
  }, {
    elements: [{
      name: "topicThought",
      title: "How much have you thought about free trade agreements before?",
      description: "1 = Not at all, 9 = A lot",
      mininumRateDescription: "Not at all",
      maximumRateDescription: "A lot",
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
      description: "1 = Fully disagree, 9 = Fully agree",
      mininumRateDescription: "Fully disagree",
      maximumRateDescription: "Fully agree",
      ...rating9
    }],  
  }, {
    // title: "Rating questions",
    // description: "Please first complete the following questions",
    elements: [{
      name: "topicThought",
      title: "How much have you thought about the ability to legally buy or sell kidneys before?",
      description: "1 = Not at all, 9 = A lot",
      mininumRateDescription: "Not at all",
      maximumRateDescription: "A lot",
      ...rating9
    }],  
  }],
};
