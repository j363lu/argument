// This file contains data for the followup questions for v2 project 

// common attributes for all the questions
const questionTemplate = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
  description: "1 = unfavorably, 9 = favorably",
  mininumRateDescription: "unfavorably",
  maximumRateDescription: "favorably",
}

// The structure of the questions
export const followupV2 = {
  pages: [{
    elements: [{
      name: "AIFeelings",
      title: "What are your feelings on AI?",      
      ...questionTemplate       
    }]
  }],
};

export const postFreeTrade = {
  pages: [{
    elements: [{
      name: "postTopic",
      title: "How favorably do you look at free trade?",      
      ...questionTemplate       
    }]
  }],
};

export const postKidneyMarkets = {
  pages: [{
    elements: [{
      name: "postTopic",
      title: "How favorably do you look at kidney markets?",      
      ...questionTemplate       
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
