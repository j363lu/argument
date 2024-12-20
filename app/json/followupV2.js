// This file contains data for the followup questions for v2 project 

const rating9 = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
  description: "1 = Fully disagree, 9 = Fully agree",
  mininumRateDescription: "Fully disagree",
  maximumRateDescription: "Fully agree",
}

const rating5 = {
  type: "rating",
  rateCount: 5,
  rateMin: 1,
  rateMax: 5,
  isRequired: true,
  description: "1 = Extremely uncharacteristic, 5 = Extremely characteristic ",
  mininumRateDescription: "Extremely uncharacteristic",
  maximumRateDescription: "Extremely characteristic",
}



// The structure of the questions
export const followupV2 = {
  pages: [{
    title: "<b>Please answer how characteristic the following statements apply to you.</b>",
    elements: [{
      name: "preferComplexProblems",
      title: "I would prefer complex to simple problems.",      
      ...rating5       
    }, {
      name: "likeThinking",
      title: "I like to have the responsibility of handling a situation that requires a lot of thinking.",      
      ...rating5       
    }, {
      name: "thinkingIsNotFun",
      title: "Thinking is not my idea of fun",      
      ...rating5       
    }, {
      name: "preferLittleThought",
      title: "I would rather do something that requires little thought than something that is sure to challenge my thinking abilities",      
      ...rating5       
    }, {
      name: "enjoyNewSolutions",
      title: "I really enjoy a task that involves coming up with new solutions to problems.",      
      ...rating5       
    }, {
      name: "preferImportantTasks",
      title: "I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought.",      
      ...rating5       
    }, ]
  }],
};

export const postFreeTrade = {
  pages: [{
    elements: [{
      name: "postTopicOpinion",
      title: "The United States should adopt free trade agreements with other countries.",
      ...rating9, 
      description: "(A free trade agreement is a pact between two or more nations to reduce barriers to imports and exports among them. Under a free trade policy, goods and services can be bought and sold across international borders with little or no government tariffs, quotas, subsidies, or prohibitions to inhibit their exchange.)",      
    }]
  }],
};

export const postKidneyMarkets = {
  pages: [{
    elements: [{
      name: "postTopicOpinion",
      title: "The United States should make it legal for people to buy and sell their kidneys if they wish.",      
      ...rating9       
    }]
  }],
};

export const writingImpact= {
  pages: [{
    elements: [{
      name: "writingImpact",
      title: "Writing about FREE TRADE/KIDNEY MARKETS makes you",      
  
      type: "rating",
      rateCount: 5,
      rateMin: 1,
      rateMax: 5,
      isRequired: true,
      description: "1 = Much more left wing, 3 = Have no change, 5 = Much more right wing",
      mininumRateDescription: "Much more left wing",
      maximumRateDescription: "Much more right wing",
    }]
  }],
}

export const sex = {
  pages: [{
    elements: [{
      name: "sex",
      title: "What is your sex?",
      type: "radiogroup",
      choices: [
        "Male", "Female"
      ],
      showOtherItem: true   
    }]
  }]
}