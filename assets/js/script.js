var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
//Creating these dynamically
var theScore;
var timerEl;
var timer = document.getElementById("timer");
var startbtn = document.getElementById("start");


var count = 0
var score = 0;
var time = 75;
var currentQuestionIndex = 0;

// variables to keep track of quiz state
var timerId;

// Start Game
startbtn.addEventListener("click", function () {
    startbtn.classList.add("hide")
    getNewQuestion(currentQuestionIndex);
    timerId = setInterval(clockTick, 1000);
    answerClickSetUp();
    // show starting time
    timerEl.textContent = time + " seconds remaining";

});



// whatTheUserClicked = a string ""
function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;

  if (whatTheUserClicked === correctText) {
    console.log("Correct!");
    score++;
  }
  else {
    console.log("Sorry, that is not correct.");
     // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 30;
    }
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
    //Creating our score
    var scoreEl = document.createElement("h3");
    scoreEl.textContent = `View Highscore ${score}`
    scoreEl.setAttribute("id", "score")
    var element=document.getElementById("header");
    element.appendChild(scoreEl);

    //Dynamically adding the html to variable
    theScore = document.getElementById("score")

    //Creating our timer
    var timerElem = document.createElement("h4");
    timerElem.textContent = "Time: "
    timerElem.setAttribute("id","timer")
    var timeEl = document.createElement("span");
    timeEl.textContent = score
    timeEl.setAttribute("id","time")
    timerElem.appendChild(timeEl)

    var element = document.getElementById("header");
    element.appendChild(timerElem);

    //Dynamically adding the html to variable
    timerEl = document.getElementById("time");
}
scoreKeeper();

function quizEnd(){
    console.log("Its over")
    // stop timer
  clearInterval(timerId);

  // hide questions
  questionQuiz.setAttribute("class", "hide");
}

function clockTick() {
    // update time
    timerEl.textContent = time;
    if (time > 1) {
        timerEl.textContent = time + ' seconds remaining';
        time--;
      } else if (time === 1) {
        timerEl.textContent = time + ' second remaining';
        time--;
      } else {
        timerEl.textContent = '';
        clearInterval(timerId);
        // displayMessage();
      }
    // out of time
    if (time <= 0) {
      quizEnd();
    }
  }