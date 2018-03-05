//vincent destefano
//time for psuedo code

//access the html for the code
//create an on click function for the right answer
//have the display of the text change when the timer is decreasing

//maybe just use a tag system for right and wrong answers
//create a clear function that then loads the next set of questions
//for every answer automatically load the next set of questions
//put the questions into arrays of objects containing the right/wrong answers

var testQuestion = {
  header: "What is my favorite drink?",
  option1: "memes",
  option2: "coke",
  option3: "he needs some milk!"
};

var testQuestion2 = {
  header: "What is my favorite movie?",
  option1: "sharknado",
  option2: "starwars",
  option3: "madMAX"
};

var testQuestion3 = {
  header: "Are we enjoying this class?",
  option1: "maybe",
  option2: "are you crazy???",
  option3: "yeah....I guess its pretty good >_>"
};

var testQuestion4 = {
  header: "What is Snapchat so bad?",
  option1: "cause its fake",
  option2: "cause they make it so hard to view stories!",
  option3: "cause my girlfriend doesn't like it"
};

var testQuestion5 = {
  header: "What is coding?",
  option1: "this",
  option2: "magic",
  option3: "Lego robotics"
};

var endResult = {
  header: "",
  option1: "",
  option2: "",
  option3: ""
};

var score = 0;
var selectedQuestionNum = 0;

var questionLog = [
  testQuestion.header,
  testQuestion2.header,
  testQuestion3.header,
  testQuestion4.header,
  testQuestion5.header
];

var correctAnswer = [
  testQuestion.option3,
  testQuestion2.option2,
  testQuestion3.option3,
  testQuestion4.option2,
  testQuestion5.option1
];

console.log(questionLog[0]);
console.log(typeof questionLog[0]);

var testQuestionArr = [
  testQuestion,
  testQuestion2,
  testQuestion3,
  testQuestion4,
  testQuestion5,
  endResult
];

function questionSelect(arr, num) {
  if (selectedQuestionNum == 5) {
    $("#timer").empty();
    $("#question").text("You got " + score + " out of 5 correct!");
    timesUp = true;
    
  } else {
    console.log(testQuestionArr, selectedQuestionNum);
    var selectedQuestion = arr[num];
    console.log(selectedQuestion);
    //selectedQuestionNum++;
    console.log(num);

    questionToScreen(selectedQuestion);
  }



  } 
  //var selectedQuestionNum = Math.round((Math.random() * 3) + 1);

  //selectedQuestionNum++;
  // return selectedQuestion;


questionSelect(testQuestionArr, selectedQuestionNum);
//question 1

//questionSelect(testQuestionArr, selectedQuestionNum);
//question 2
//this works and incremenst so it gives the next question in the question array

function questionToScreen(arr) {
  var domHeader = arr.header;
  var domOption1 = arr.option1;
  var domOption2 = arr.option2;
  var domOption3 = arr.option3;

  var test = [domOption1, domOption2, domOption3];

  console.log(domHeader);
  console.log(test);

  for (var i = 0; i < test.length; i++) {
    var buttonOptions = $("<button>");
    buttonOptions.addClass("test-button");
    buttonOptions.attr("correctChoice", i);
    buttonOptions.text(test[i]);
    $("#question").text(domHeader);
    $("#choices").append(buttonOptions);
    console.log(buttonOptions);
    //creates the fight button
  }
}

var alreadyScored = false;
function scoreBoard() {
  if (!alreadyScored) {
    score++;
    $("#choices").text("that was the right answer");
    $("#score").text("Player's current score: " + score);
    alreadyScored = true;
    console.log("test for scoreBoard" + alreadyScored);
  } else {
    console.log("this idiot is spamming the button!");
  }
}

var triedAnswer = false;
function wrongAnswer() {
  if (!triedAnswer) {
    $("#choices").text("that was the wrong answer");
    alreadyScored = true;
    triedAnswer = true;
  }
}
var nextQuestion;
var timeLeft = 5;
var timesUp = false;

function restartGame() {
  selectedQuestionNum = 0;
  score = 0;
  timeLeft = 10;
  $("#choices").empty();
  $("#question").empty();
  $("#score").empty();
  questionSelect(testQuestionArr, selectedQuestionNum);
  resetTimer();
  gameTimer();
}

function gameTimer() {
  if (!timesUp) {
    nextQuestion = setInterval(timeMinus, 1000);
    timesUp = true;
    console.log(nextQuestion);
  }
}

function timeMinus() {
  timeLeft--;

  $("#timer").text("Amount of time remaining: " + timeLeft);

  if (timeLeft === 0) {
    $("#question").empty();
    $("#choices").empty();
    selectedQuestionNum++;
    questionSelect(testQuestionArr, selectedQuestionNum);
    resetTimer();
    alreadyScored = false;
    triedAnswer = false;
    gameTimer();
  }
  if(timeLeft <= 0){
    $("#timer").empty();
    clearInterval(nextQuestion);
    $("#question").text("You got " + score + " out of 5 correct!");
    timesUp = true;
    var retryBtn = $("<button>");
    retryBtn.addClass("retry");
    retryBtn.text("RETRY?");
    $("#choices").append(retryBtn);

  }
}

function resetTimer() {
  clearInterval(nextQuestion);
  timesUp = false;
  timeLeft = 5;
  //alreadyScored = false;
  console.log("this is the amount fo time left: " + timeLeft);
  $("#timer").text("Amount of time remaining: " + timeLeft);
}



gameTimer();

$(document).on("click", ".test-button", function() {
  console.log("the loop is the thing not working");

  var testData = parseInt($(this).attr("correctChoice"));

  console.log(testData);
  //question #1
  if ($("#question").text() === questionLog[0]) {
    if (
      testData === 2 &&
      $("#question").text() === questionLog[selectedQuestionNum]
    ) {
      console.log("this click is working");
      scoreBoard();
      //the selectQuestionNum isnt incrementing properly becasue there is no selectedQuestionNum++!!!
    } else {
      wrongAnswer();
    }
  }
  //question #2
  if ($("#question").text() === questionLog[1]) {
    if (
      testData === 1 &&
      $("#question").text() === questionLog[selectedQuestionNum]
    ) {
      console.log("this click is working");
      scoreBoard();
      //the selectQuestionNum isnt incrementing properly becasue there is no selectedQuestionNum++!!!
    } else {
      wrongAnswer();
    }
  }

  //question 3
  if ($("#question").text() === questionLog[2]) {
    if (
      testData === 2 &&
      $("#question").text() === questionLog[selectedQuestionNum]
    ) {
      console.log("this click is working");
      scoreBoard();
      //the selectQuestionNum isnt incrementing properly becasue there is no selectedQuestionNum++!!!
    } else {
      wrongAnswer();
    }
  }

  if ($("#question").text() === questionLog[3]) {
    if (
      testData === 1 &&
      $("#question").text() === questionLog[selectedQuestionNum]
    ) {
      console.log("this click is working");
      scoreBoard();
      //the selectQuestionNum isnt incrementing properly becasue there is no selectedQuestionNum++!!!
    } else {
      wrongAnswer();
    }
  }

  if ($("#question").text() === questionLog[4]) {
    if (
      testData === 0 &&
      $("#question").text() === questionLog[selectedQuestionNum]
    ) {
      console.log("this click is working");
      scoreBoard();
      //the selectQuestionNum isnt incrementing properly becasue there is no selectedQuestionNum++!!!
    } else {
      wrongAnswer();
    }
  }

  

});

//questionToScreen(testQuestion);
$(document).on("click", ".retry", function() {
restartGame();
});