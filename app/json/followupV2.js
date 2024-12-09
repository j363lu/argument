// This file contains data for the followup questions for v2 project 

const rating9 = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
  description: "1 = fully disagree, 9 = fully agree",
  mininumRateDescription: "fully disagree",
  maximumRateDescription: "fully agree",
}

const rating5 = {
  type: "rating",
  rateCount: 5,
  rateMin: 1,
  rateMax: 5,
  isRequired: true,
  description: "1 = extremely uncharacteristic, 5 = extremely characteristic ",
  mininumRateDescription: "extremely uncharacteristic",
  maximumRateDescription: "extremely characteristic",
}



// The structure of the questions
export const followupV2 = {
  description: "For each sentence below, please select how uncharacteristic or characteristic (5-point scale) this is for you personally.",
  pages: [{
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
      description: "1 = much more left wing, 3 = have no change, 5 = much more right wing",
      mininumRateDescription: "much more left wing",
      maximumRateDescription: "much more right wing",
    }]
  }],
}
