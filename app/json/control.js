// This file contains data for the control question page 

// The structure of the control questions
const control = {
  pages: [{
    title: "Short answer",
    elements: [{
      name: "Control",
      title: "Please write a short paragraph explaining your stance towards legalizing kidney markets and why you hold that stance.",      
      description: "Please limit your response to around 300-1200 characters.",
      type: "comment",
      isRequired: true,
      maxLength: 1200,         
    }]
  }],
};

export default control;