const ANALYTICAL = "analytical";
const AMIABLE = "emiable";
const EXPRESSIVE = "expressive";
const DRIVER = "driver";

let driverCount = 0;
let analyticalCount = 0;
let amiableCount = 0;
let expressiveCount = 0;

var questions = [
  {
    options: [
      { 'a': DRIVER }, // Key Value
      { 'b': AMIABLE },
      { 'c': ANALYTICAL },
      { 'd': EXPRESSIVE }
    ]
  },
  {
    options: [
      { 'a': ANALYTICAL }, 
      { 'b': EXPRESSIVE },
      { 'c': DRIVER },
      { 'd': AMIABLE }
    ]
  }
];


let answer = (questionID, selectedOption) => {
    // get options for selected question 
    var questionNoIndex = questionID -1;
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
