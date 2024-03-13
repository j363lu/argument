import { part2Questions } from "./initialQuestions";

const questionTemplate = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  description: "1 = Not at all, 9 = Completely",
  isRequired: true,
  mininumRateDescription: "Not at all",
  maximumRateDescription: "Completely",
}

const part2 = {
  pages: [{
    elements: [...part2Questions.pages[0].elements]
  }, {
    description: "Please think back to the previous week when you discussed kidney markets with an AI while answering the following questions.",
    elements: [{
      name: "AI1",
      title: "Did you feel as though the AI was arguing with you?",      
      ...questionTemplate       
    },{
      name: "AI2",
      title: "Did you feel as though the AI was interested in a dialogue with you?",      
      ...questionTemplate        
    },{
      name: "AI3",
      title: "Did the statements from the AI surprise you?",      
      ...questionTemplate        
    },{
      name: "AI4",
      title: "Did you feel as though the AI was telling the truth?",      
      ...questionTemplate        
    },{
      name: "AI5",
      title: "Did you feel as though the AI was trying to persuade you?",      
      ...questionTemplate         
    },{
      name: "AI6",
      title: "Did you feel as though the AI was trying to manipulate you?",      
      ...questionTemplate       
    },
    ]
  }],
};

export default part2;