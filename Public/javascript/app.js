const ANALYTICAL = "analytical";
const AMIABLE = "amiable";
const EXPRESSIVE = "expressive";
const DRIVER = "driver";

let driverCount = 0;
let analyticalCount = 0;
let amiableCount = 0;
let expressiveCount = 0;

let selectedAnswers;

var questions = [
  {
    options: [         //1
      { 'a': DRIVER }, // Key Value
      { 'b': AMIABLE },
      { 'c': ANALYTICAL },
      { 'd': EXPRESSIVE }
    ]
  },
  {
    options: [        //2
      { 'a': ANALYTICAL }, 
      { 'b': EXPRESSIVE },
      { 'c': DRIVER },
      { 'd': AMIABLE }
    ]
  },
  {
    options: [        // 3
      { 'a': AMIABLE },
      { 'b': DRIVER },
      { 'c': ANALYTICAL},
      { 'd': EXPRESSIVE}
    ]
  },
  {
    options: [         //4
      { 'a': EXPRESSIVE },
      { 'b': AMIABLE },
      { 'c': DRIVER },
      { 'd': ANALYTICAL }
    ]
  },
  {
    options: [        //5
        { 'a':  AMIABLE },
        { 'b': EXPRESSIVE },
        { 'c': ANALYTICAL },
        { 'd': DRIVER }
    ]
  },
  {
    options: [       //6
      { 'a': AMIABLE },
      { 'b': EXPRESSIVE },
      { 'c': DRIVER },
      { 'd': ANALYTICAL }
    ]
  },
  {
    options: [     //7
      { 'a': AMIABLE },
      { 'b': DRIVER },
      { 'c': ANALYTICAL },
      { 'd': EXPRESSIVE }
    ]
  },
  {
    options: [     //8
      { 'a': DRIVER },
      { 'b': AMIABLE },
      { 'c': EXPRESSIVE },
      { 'd': ANALYTICAL }
    ]
  },
  {
    options: [       //9
      { 'a': EXPRESSIVE },
      { 'b': AMIABLE },
      { 'c': ANALYTICAL },
      { 'd': EXPRESSIVE }
    ]
  },
  {
    options: [       //10
      { 'a': DRIVER },
      { 'b': AMIABLE },
      { 'c': ANALYTICAL },
      { 'd': EXPRESSIVE }
    ]
  },
  
  {
    options: [       //11
      { 'a': ANALYTICAL},
      { 'b': AMIABLE},
      { 'c': EXPRESSIVE},
      { 'D': DRIVER}
    ]
  },
  {
    options: [         //12
      { 'a': AMIABLE},
      { 'b': DRIVER},
      { 'c': EXPRESSIVE},
      { 'D': ANALYTICAL}
    ]
  },
    {
    options: [         //13
      { 'a': AMIABLE},
      { 'b': DRIVER},
      { 'c': ANALYTICAL},
      { 'D': EXPRESSIVE}
    ]
  },
    {
    options: [          //14
      { 'a': DRIVER},
      { 'b': AMIABLE},
      { 'c': EXPRESSIVE},
      { 'D': ANALYTICAL}
    ]
  },
    {
    options: [         //15
      { 'a': DRIVER},
      { 'b': AMIABLE},
      { 'c': EXPRESSIVE},
      { 'D': ANALYTICAL}
    ]
  },
    {
    options: [         //16
      { 'a': EXPRESSIVE},
      { 'b': AMIABLE},
      { 'c': DRIVER},
      { 'D': ANALYTICAL}
    ]
  },
    {
    options: [          //17
      { 'a': EXPRESSIVE},
      { 'b': DRIVER},
      { 'c': AMIABLE},
      { 'D': ANALYTICAL}
    ]
  },
    {
    options: [         //18
      { 'a': ANALYTICAL},
      { 'b': EXPRESSIVE},
      { 'c': DRIVER},
      { 'D': AMIABLE}
    ]
  },
    {
    options: [         //19
      { 'a': EXPRESSIVE},
      { 'b': ANALYTICAL},
      { 'c': DRIVER},
      { 'D': AMIABLE}
    ]
  },
      {
    options: [         //20
      { 'a': DRIVER},
      { 'b': AMIABLE},
      { 'c': EXPRESSIVE},
      { 'D': ANALYTICAL}
    ]
  }
];


let answer = (questionID, selectedOption) => {
    // get options for selected question 
    var questionNoIndex = questionID - 1;
    var options = questions[questionNoIndex].options;

  for (let i = 0; i < options.length; i++) {
    if (options[i][selectedOption]) {     
      handleAnswer(options[i][selectedOption])
    }
  }
};

let handleAnswer = (answer) => {
  switch (answer) {
    case ANALYTICAL:
      analyticalCount = analyticalCount + 1;
      break;

    case EXPRESSIVE:
      expressiveCount = expressiveCount + 1;
      break;

    case DRIVER:
      driverCount = driverCount + 1;
      break;

    case AMIABLE:
      amiableCount = amiableCount + 1;
      break;
  }
  updateResult();
};

let updateResult = () => {
 document.getElementById("analytical-count").innerText = analyticalCount;
 document.getElementById("amiable-count").innerText =  amiableCount;
 document.getElementById("expressive-count").innerText = expressiveCount;
 document.getElementById("driver-count").innerText = driverCount;

};
