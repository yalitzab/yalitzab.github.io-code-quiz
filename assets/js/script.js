var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var startbtn = document.getElementById("start");

var timerEl = document.getElementById("time");
var score = 0;
// var secondsLeft = 75;
var currentQuestionIndex = 0;

// variables to keep track of quiz state
var timerId;

function countdown() {
    var timeLeft = 5;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
}




// whatTheUserClicked = a string ""
function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;

  if (whatTheUserClicked === correctText) {
    console.log("Correct!");
    score++;
  }
  else {
    console.log("Sorry, that is not correct.");
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);
}

var questions = [
    {
        title: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Cascading Single Sheet", "Cascading Strong Sheet", "Cascading Style Sandwich"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<js>", "<scripting>", "<javascript>"],
        answer: "<script>"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ["The <head> section", "Both the <head> section and the <body> section are correct", "The <body> section", "The <footer> section"],
        answer: "Both the <head> section and the <body> section are correct"
    },
    {
        title: "Which operator is used to assign a value to a variable?",
        choices: ["=", "*", "x", "-"],
        answer: "="
    },
    {
        title: "How can you add a comment in a JavaScript?",
        choices: ["'This is a comment", "<!--This is a comment-->", "//This is a comment", "<This is a comment>"],
        answer: "//This is a comment"
    },


];


function answerClickSetUp() {
  var a = document.getElementById("answer1");
  var b = document.getElementById("answer2");
  var c = document.getElementById("answer3");
  var d = document.getElementById("answer4");

  a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
  b.addEventListener("click", function () { goToNextQuestion(b.innerText); });
  c.addEventListener("click", function () { goToNextQuestion(c.innerText); });
  d.addEventListener("click", function () { goToNextQuestion(d.innerText); });
}
answerClickSetUp();

startbtn.addEventListener("click", function () {
  getNewQuestion(currentQuestionIndex);
  timerId = setInterval(clockTick, 1000);
  // show starting time
  timerEl.textContent = time;
  getQuestion();
});

function clockTick() {
    // update time
    timer--;
    timerEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

var currentQuestion;
function getNewQuestion(questionIndex) {
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;
  // console.log(title);
  var questionEl = document.getElementById("question");
  questionEl.innerText = title;

  var choice1 = question.choices[0];
  var answerEl1 = document.getElementById("answer1");
  answerEl1.innerText = choice1;
  // console.log(choice1);

  var choice2 = question.choices[1];
  var answerEl2 = document.getElementById("answer2");
  answerEl2.innerText = choice2;
  // console.log(choice2);

  var choice3 = question.choices[2];
  var answerEl3 = document.getElementById("answer3");
  answerEl3.innerText = choice3;
  // console.log(choice3);

  var choice4 = question.choices[3];
  var answerEl4 = document.getElementById("answer4");
  answerEl4.innerText = choice4;
  // console.log(choice4);


  document.getElementById("question").innerText = title;
  document.getElementById("answer1").innerText = choice1;
  document.getElementById("answer2").innerText = choice2;
  document.getElementById("answer3").innerText = choice3;
  document.getElementById("answer4").innerText = choice4;
}


//submitAnswer.addEventListener("click", quizTime);
function scoreKeeper(){
  document.getElementById("score").innerHTML = count++;

}
scoreKeeper();
