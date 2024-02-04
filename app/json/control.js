// This file contains data for the control question page 

// The structure of the control questions
const control = {
  pages: [{
    // title: "",
    // description: "You may decline to answer any questions that you do not wish to answer by leaving them blank",
    elements: [{
      name: "Control",
      title: "Please write a short paragraph on your stance towards legalizing kidney markets and why you have that stance.",      
      // description: "What is your occupation?",
      type: "comment",
      isRequired: true,
      maxLength: 1000,         
    }]
  }],
};

export default control;