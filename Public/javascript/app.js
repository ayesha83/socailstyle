// Setting constant values
const ANALYTICAL = "analytical";
const AMIABLE = "amiable";
const EXPRESSIVE = "expressive";
const DRIVER = "driver";

// Initilizing counts to zero
let driverCount = 0;
let analyticalCount = 0;
let amiableCount = 0;
let expressiveCount = 0;

let selectedAnswers={};

// Setting array for question options
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
      { 'd': DRIVER}
    ]
  },
  {
    options: [         //12
      { 'a': AMIABLE},
      { 'b': DRIVER},
      { 'c': EXPRESSIVE},
      { 'd': ANALYTICAL}
    ]
  },
    {
    options: [         //13
      { 'a': AMIABLE},
      { 'b': DRIVER},
      { 'c': ANALYTICAL},
      { 'd': EXPRESSIVE}
    ]
  },
    {
    options: [          //14
      { 'a': DRIVER},
      { 'b': AMIABLE},
      { 'c': EXPRESSIVE},
      { 'd': ANALYTICAL}
    ]
  },
    {
    options: [         //15
      { 'a': DRIVER},
      { 'b': AMIABLE},
      { 'c': EXPRESSIVE},
      { 'd': ANALYTICAL}
    ]
  },
    {
    options: [         //16
      { 'a': EXPRESSIVE},
      { 'b': AMIABLE},
      { 'c': DRIVER},
      { 'd': ANALYTICAL}
    ]
  },
    {
    options: [          //17
      { 'a': EXPRESSIVE},
      { 'b': DRIVER},
      { 'c': AMIABLE},
      { 'd': ANALYTICAL}
    ]
  },
    {
    options: [         //18
      { 'a': ANALYTICAL},
      { 'b': EXPRESSIVE},
      { 'c': DRIVER},
      { 'd': AMIABLE}
    ]
  },
    {
    options: [         //19
      { 'a': EXPRESSIVE},
      { 'b': ANALYTICAL},
      { 'c': DRIVER},
      { 'd': AMIABLE}
    ]
  },
      {
    options: [         //20
      { 'a': DRIVER},
      { 'b': AMIABLE},
      { 'c': EXPRESSIVE},
      { 'd': ANALYTICAL}
    ]
  }
];

// answer() function from user input
let answer = ( questionID, selectedOption) => {
  // get options for selected question 
  var questionNoIndex = questionID - 1;
  var options = questions[questionNoIndex].options;

// Iteration for the options option
  for (let i = 0; i < options.length; i++) {
    if (options[i][selectedOption]) {     
      handleAnswer(questionID, options[i][selectedOption])
    }
  }
};

// Adding counts 
let handleAnswer = (questionID,answer) => {
  // Adding answers into dictionary
  selectedAnswers[questionID]= answer;
  analyticalCount = 0;
  expressiveCount =0;
  driverCount = 0;
  amiableCount = 0;

  // Checking for more than one clicks
  for(var key in selectedAnswers){
    let opt = selectedAnswers[key];
    console.log(opt);
    switch (opt) {
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
      default:
        break;
    }
  }
  updateResult();
};

// Display result 
let updateResult = () => { 
 document.getElementById("analytical-count").innerText = analyticalCount;
 document.getElementById("amiable-count").innerText =  amiableCount;
 document.getElementById("expressive-count").innerText = expressiveCount;
 document.getElementById("driver-count").innerText = driverCount;
};
