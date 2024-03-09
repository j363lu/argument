// This file contains data for the decision question page 
import { postConversationQuestions } from "./initialQuestions";
import { shuffleArray } from "@/lib/helperFuncs";

// common attributes for all the rating questioins
const questionTemplate = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  isRequired: true,
  description: "1 = strongly disagree, 5 = strongly agree",
  mininumRateDescription: "Strongly disagree",
  maximumRateDescription: "Strongly agree",
}

// The structure of the decision questions
let decision = {
  pages: [{
    elements: [{
      name: "rational1",
      title: "I prefer to gather all the necessary information before committing to a decision.",      
      ...questionTemplate       
    },{
      name: "rational2",
      title: "I thoroughly evaluate decision alternatives before making a final choice.",      
      ...questionTemplate        
    },{
      name: "rational3",
      title: "In decision making, I take time to contemplate the pros/cons or risks/benefits of a situation.",      
      ...questionTemplate        
    },{
      name: "rational4",
      title: "Investigating the facts is an important part of my decision making process.",      
      ...questionTemplate        
    },{
      name: "rational5",
      title: "I weigh a number of different factors when making decisions.",      
      ...questionTemplate         
    },{
      name: "intuitive1",
      title: "When making decisions, I rely mainly on my gut feelings.",      
      ...questionTemplate       
    },{
      name: "intuitive2",
      title: "My initial hunch about decisions is generally what I follow.",      
      ...questionTemplate        
    },{
      name: "intuitive3",
      title: "I make decisions based on intuition.",      
      ...questionTemplate        
    },{
      name: "intuitive4",
      title: "I rely on my first impressions when making decisions.",      
      ...questionTemplate       
    },{
      name: "intuitive5",
      title: "I weigh feelings more than analysis in making decisions.",      
      ...questionTemplate       
    },
    ]
  }],
};

shuffleArray(decision.pages[0].elements);
decision.pages[0].elements.push(...postConversationQuestions.pages[0].elements);

export default decision;