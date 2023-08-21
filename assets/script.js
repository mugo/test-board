// Array of test questions

const test = [
  {
    questionNo: "#01/10",
    question: "In which HTML tag should we place the JavaScript code?",
    A: "<script>",
    B: "<js>",
    C: "<scripting>",
    D: "<javascript>",
    correct: "A",
  },
  {
    questionNo: "#02/10",
    question: "How do you find the number with the highest value of x and y?",
    A: "top(x, y)",
    B: "ceil(x, y)",
    C: "Math.max(x, y)",
    D: "Math.ceil(x, y)",
    correct: "C",
  },
  {
    questionNo: "#03/10",
    question: "How do you write ”Hello World” in an alert box?",
    A: "alert(”Hello World”)",
    B: "msg(”Hello World”)",
    C: "alertBox(”Hello World”)",
    D: "msgBox(”Hello World”)",
    correct: "A",
  },
  {
    questionNo: "#04/10",
    question: "How to write an IF statement for executing some code if ”i” is NOT equal to 5?",
    A: "if (i != 5)",
    B: "if (i <>; 5)",
    C: "if i <> 5",
    D: "if i =! 5",
    correct: "A",
  },
  {
    questionNo: "#05/10",
    question: "How does a FOR loop start?",
    A: "for (i = 0; i <= 5)",
    B: "for i = 1 to 5",
    C: "for (i = 0; i <= 5; i++)",
    D: "for (i <= 5; i++)",
    correct: "C",
  },
  {
    questionNo: "#06/10",
    question: "How to write an IF statement in JavaScript? ",
    A: "if i = 5 then",
    B: "if(i == 5)",
    C: "if i == 5 then",
    D: "if i = 5 ",
    correct: "B",
  },
  {
    questionNo: "#07/10",
    question:
      "How do you round the number 7.25, to the nearest integer?",
    A: "Math.round(7.25)",
    B: "rnd(7.25)",
    C: "Math.rnd(7.25)",
    D: "round(7.25)",
    correct: "A",
  },
  {
    questionNo: "#08/10",
    question: "Which event occurs when the user clicks on an HTML element?",
    A: "onmouseclick",
    B: "onmouseover",
    C: "onclick",
    D: "onchange",
    correct: "C",
  },
  {
    questionNo: "#09/10",
    question: "Which operator is used to assign a value to a variable?",
    A: "=",
    B: "-",
    C: "*",
    D: "X",
    correct: "A",
  },
  {
    questionNo: "#10/10",
    question: "What is the correct way to write a JavaScript array?",
    A: "var colors = 1 = (”red”), 2 = (”green”), 3 = (”blue”)",
    B: "var colors = (1:”red”, 2:”green”, 3:”blue”)",
    C: "var colors = [”red”, ”green”, ”blue”]",
    D: "var colors = ”red”, ”green”, ”blue”",
    correct: "C",
  },
];

// Select the test div
const testDiv = document.getElementById("test-container");

// Select the test question number
const testNumberElement = document.getElementById("test-number");

// Select the test question
const testElement = document.getElementById("question");

// Select an answer element
const answerElements = document.querySelectorAll(".answer");

// Select the each answer
const answerA = document.getElementById("answer-a-label");
const answerB = document.getElementById("answer-b-label");
const answerC = document.getElementById("answer-c-label");
const answerD = document.getElementById("answer-d-label");

//Select buttons
const submitBtn = document.getElementById("submit-button");

let currentQuestion = 0;
let score = 0;
const currentQuestionDetails = test[currentQuestion];

loadQuestion();

// Function for loading the test.
function loadQuestion() {
  deselectAnswers();
  const currentQuestionDetails = test[currentQuestion];

  // Returns text content within the current question.
  testNumberElement.innerText = currentQuestionDetails.testNumber;
  testElement.innerText = currentQuestionDetails.question;
  answerA.innerText = currentQuestionDetails.A;
  answerB.innerText = currentQuestionDetails.B;
  answerC.innerText = currentQuestionDetails.C;
  answerD.innerText = currentQuestionDetails.D;
}

// Function to unselect all buttons at the beginning of a test
function deselectAnswers() {
  // Loops through the answers and deselects all
  answerElements.forEach((answerElement) => (answerElement.checked = false));
}

// Function to check which button is selected
function getSelected() {
  let answer;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

// Show the next Question
submitBtn.addEventListener("click", function () {
    // If the correct answer is selected increment the score
    const correctAnswer = getSelected();
    console.log(correctAnswer);

    if (correctAnswer) {
      if (correctAnswer === test[currentQuestion].correct) {
        score += 10;
      
  
        console.log("Score now", score);
      }
    
    // Load the next question and increment score based on conditions
    currentQuestion++; 

    if (currentQuestion < test.length) {
      loadQuestion();
    } 
    else if(currentQuestion < test.length || score >= 90) {
      testDiv.innerHTML = `<h2>You've scored <span style="color:#019AA8">${score}/100 Pts</span></h2>
      <p style="margin-top: 3rem;font-weight: 600;">You seem quite knowledgeable in JavaScript!</p>
          <button class="reload-btn"  onClick ="location.reload()">Reload</button>`;
    } 
    else if(currentQuestion < test.length && score < 80 || score >= 60) {
      testDiv.innerHTML = `<h2>You've scored <span style="color: #019AA8">${score}/100 Pts</span></h2>
      <p style="margin-top: 3rem;font-weight: 600;">Direct more attention to the code!</p>
      <button class="reload-btn" "style="width: 5rem" onClick ="location.reload()">Reload</button>`;
    } 
    else if(currentQuestion < test.length && score < 50 || score >= 20) {
      testDiv.innerHTML = `<h2>You've scored <span style="color:#019AA8">${score}/100 Pts</span></h2>
      <p style="margin-top: 3rem;font-weight: 600;">There's room for improvement!</p>
      <button class="reload-btn" "style="width: 5rem" onClick ="location.reload()">Reload</button>`;
    }
    else {
      testDiv.innerHTML = `<h2>You've scored <span style="color:#019AA8">${score}/100 Pts</span></h2>
      <p style="margin-top: 3rem;font-weight: 600;">Continue honing your skills through practice!</p>
      <button class="reload-btn" "style="width: 5rem" onClick ="location.reload()">Reload</button>`;
    }
  }
});