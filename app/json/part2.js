const rating9 = {
  type: "rating",
  rateCount: 9,
  rateMin: 1,
  rateMax: 9,
  description: "1 = fully disagree, 9 = fully agree",
  isRequired: true,
  mininumRateDescription: "fully disagree",
  maximumRateDescription: "fully agree",
}

const rating7 = {
  type: "rating",
  rateCount: 7,
  rateMin: 1,
  rateMax: 7,
  description: "1 = completely disagree, 7 = completely agree",
  isRequired: true,
  mininumRateDescription: "completely disagree",
  maximumRateDescription: "completely agree",
}

const rating6 = {
  type: "rating",
  rateCount: 6,
  rateMin: 1,
  rateMax: 6,
  isRequired: true,
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const memoryQuestions = shuffleArray([{
  name: "rememberVividly",
  title: "I remember the event vividly.",      
  ...rating7
}, {
  name: "rememberClearly",
  title: "I remember the event very clearly.",      
  ...rating7
}, {
  name: "likeYesterday",
  title: "The things I experienced during the event are so vivid that I feel as though it just happened yesterday.",      
  ...rating7
}, {
  name: "likeIWereThere",
  title: "I can remember the situation in which the event occurred vividly, as though I were there.",      
  ...rating7
}, {
  name: "makeFilm",
  title: "If asked, I could make a film about the event that would depict exactly what happened, because I remember it so clearly.",      
  ...rating7
}, {
  name: "occurDifferently",
  title: "I think that the event may have occurred differently to how I remember it.",      
  ...rating7
}, {
  name: "doubtful",
  title: "I am seriously doubtful that the event occurred in the way I remember it.",      
  ...rating7
}, {
  name: "occurExactly",
  title: "The event occurred exactly the way I remember it.",      
  ...rating7
}, {
  name: "notFabricated",
  title: "As I remember the event, I have not imagined or fabricated anything that did not occur.",      
  ...rating7
}, {
  name: "sure",
  title: "I am sure that the event occurred in the way I remember it.",      
  ...rating7
}, {
  name: "haveToSearch",
  title: "I had to search my memory to recall this event.",      
  ...rating7
}, {
  name: "haveToThink",
  title: "I had to think for a while to recall this event.",      
  ...rating7
}, {
  name: "notRecallOften",
  title: "I do not recall this event very often.",      
  ...rating7
}, {
  name: "comeBackDisjointedPieces",
  title: "This memory comes back to me in disjointed pieces.",      
  ...rating7
}, {
  name: "comeBackDisjointedFlashbacks",
  title: "This memory comes back to me in disjointed flashbacks.",      
  ...rating7
}, {
  name: "thereAreGaps",
  title: "As I remember the event, there are gaps and some things I cannot remember in the storyline.",      
  ...rating7
}, {
  name: "incoherentOrder",
  title: "The order of events in the memory is incoherent and confusing.",      
  ...rating7
}, {
  name: "chronologicalOrder",
  title: "I remember the event in chronological order (before, during and after).",      
  ...rating7
}, {
  name: "feelingsWeak",
  title: "While remembering the event now, my feelings are quite weak.",      
  ...rating7
}, {
  name: "feelingsIntense",
  title: "While remembering the event now, my feelings are quite intense.",      
  ...rating7
}, {
  name: "evokesWeakEmotions",
  title: "My memory of this event evokes very weak emotions in me.",      
  ...rating7
}, {
  name: "feelIntenseEmotions",
  title: "When I focus the event, I feel very intense emotions.",      
  ...rating7
}, {
  name: "evokesStrongEmotions",
  title: "My memory of this event evokes very strong emotions in me.",      
  ...rating7
}])

const memory = [
  {
    title: "You have engaged with AI",
    elements: memoryQuestions.slice(0, 12),
    questionsOrder: "random",     
  }, {
    // title: "You have engaged with AI",
    elements: memoryQuestions.slice(12, 23),
    questionsOrder: "random",    
  }
]

const part2 = [{
  elements: [{
    name: "economicPart2",
    title: "How liberal or conservative do you consider yourself to be when it comes to economic issues (e.g., taxes, regulations, and government spending)?",      
    description: "1 = strongly liberal, 2 = mostly liberal, 3 = leans liberal, 4 = leans conservative, 5 = mostly conservative, 6 = strongly conservative",
    mininumRateDescription: "strongly liberal",
    maximumRateDescription: "strongly conservative",
    ...rating6
  }, {
    name: "socialPart2",
    title: "How liberal or conservative do you consider yourself to be when it comes to social issues (e.g., abortion, LGBT issues, and freedom of speech)?",      
    description: "1 = strongly liberal, 2 = mostly liberal, 3 = leans liberal, 4 = leans conservative, 5 = mostly conservative, 6 = strongly conservative",
    mininumRateDescription: "strongly liberal",
    maximumRateDescription: "strongly conservative",
    ...rating6
  }, {
    name: "politicalScalePart2",
    title: "Do you identify more with democrat or republican values overall?",      
    description: "1 = strongly democrat, 2 = mostly democrat, 3 = leans democrat, 4 = leans republican, 5 = mostly republican, 6 = strongly republican",
    mininumRateDescription: "strongly democrat",
    maximumRateDescription: "strongly republican",
    ...rating6
  }]
}, {
  elements: [{
    name: "viewOnAI",
    title: "Generally speaking, what are your views on AI?",      
    description: "1 = very negative, 2 = fairly negative, 3 = neither positive nor negative, 4 = fairly positive, 5 = very positive",
    mininumRateDescription: "very negative",
    maximumRateDescription: "very positive",
    type: "rating",
    rateCount: 5,
    rateMin: 1,
    rateMax: 5,
    isRequired: true,
  }]       
}]

export const freeTrade = {
  pages: [{
    elements: [{
      name: "mturkIDPart2",
      title: "Please enter your MTurk ID",
      type: "text",
      isRequired: true,
    }],
  }, {
    // description: "Please think back to the previous week when you discussed kidney markets with an AI while answering the following questions.",
    elements: [{
      name: "topicOpinionPart2",
      title: "The United States should adopt free trade agreements with other countries.",      
      ...rating9,
      description: "(A free trade agreement is a pact between two or more nations to reduce barriers to imports and exports among them. Under a free trade policy, goods and services can be bought and sold across international borders with little or no government tariffs, quotas, subsidies, or prohibitions to inhibit their exchange.)"
    }]
  }, {
    ...memory[0],
    description: "You completed the first part of this study a week ago where you had written about free trade agreements. Please answer the following questions trying to remember when you had to write about free trade agreements.",
  }, {
    ...memory[1],
    description: "You completed the first part of this study a week ago where you had written about free trade agreements. Please answer the following questions trying to remember when you had to write about free trade agreements.",
  }, {
    elements: [{
      name: "topicOpinionPart1Before",
      title: "How favorable were you towards the idea that the United States should adopt free trade agreements with other countries before you wrote about it a week ago?",      
      ...rating9
    }]
  }, {
    elements: [{
      name: "topicOpinionPart1After",
      title: "How favorable were you towards the idea that the United States should adopt free trade agreements with other countries directly after you wrote about it a week ago?",      
      ...rating9
    }]
  }, {
    elements: [{
      name: "argumentPart1",
      title: "Please write a specific argument that was made to you last week concerning free trade.",      
      description: "Please limit your response to 10-50 words.",
      type: "comment",
      isRequired: true,
    }]
  },
  ...part2],
}

export const kidneyMarkets = {
  pages: [{
    elements: [{
      name: "mturkIDPart2",
      title: "Please enter your MTurk ID",
      type: "text",
      isRequired: true,
    }],
  }, {
    // description: "Please think back to the previous week when you discussed kidney markets with an AI while answering the following questions.",
    elements: [{
      name: "topicOpinionPart2",
      title: "The United States should make it legal for people to buy and sell their kidneys if they wish.",      
      ...rating9,
    }]
  }, {
    ...memory[0],
    description: "You completed the first part of this study a week ago where you had written about the ability to legally buy or sell kidneys. Please answer the following questions trying to remember when you had to write about the ability to legally buy or sell kidneys.",
  }, {
    ...memory[1],
    description: "You completed the first part of this study a week ago where you had written about the ability to legally buy or sell kidneys. Please answer the following questions trying to remember when you had to write about the ability to legally buy or sell kidneys.",
  }, {
    elements: [{
      name: "topicOpinionPart1Before",
      title: "How favorable were you towards the idea the United States should make it legal for people to buy and sell their kidneys if they wish before you wrote about it a week ago?",      
      ...rating9
    }]
  }, {
    elements: [{
      name: "topicOpinionPart1After",
      title: "How favorable were you towards the idea the United States should make it legal for people to buy and sell their kidneys if they wish directly after you wrote about it a week ago?",      
      ...rating9
    }]
  }, {
    elements: [{
      name: "argumentPart1",
      title: "Please write a specific argument that was made to you last week concerning kidney markets.",      
      description: "Please limit your response to 10-50 words.",
      type: "comment",
      isRequired: true,
    }]
  },
  ...part2],
}
