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
   option1: "this",
   option2: "coke",
   option3: "he needs some milk!"
 }

var testQuestion2 = {
  header: "What is my favorite movie?",
  option1: "this",
  option2: "starwarz",
  option3: "madMAX"
}

var questionLog = [testQuestion.header, testQuestion2.header]

console.log(questionLog[0]);
console.log(typeof questionLog[0]);

var testQuestionArr = [testQuestion, testQuestion2];
var rightAnswer = true;
var wrongAnswer = false;
var score = 0;
var selectedQuestionNum = 0;

function questionSelect(arr, num){
  //var selectedQuestionNum = Math.round((Math.random() * 3) + 1);
  console.log(testQuestionArr, selectedQuestionNum);
  var selectedQuestion = arr[num];
  console.log(selectedQuestion);
  //selectedQuestionNum++;
  console.log(num);

  questionToScreen(selectedQuestion);

  selectedQuestionNum++
 // return selectedQuestion;
  
}

questionSelect(testQuestionArr, selectedQuestionNum);
//question 1

//questionSelect(testQuestionArr, selectedQuestionNum);
//question 2
//this works and incremenst so it gives the next question in the question array


function questionToScreen(arr){

  var domHeader = arr.header;
  var domOption1 = arr.option1;
  var domOption2 = arr.option2;
  var domOption3 = arr.option3;
  
  var test = [domOption1, domOption2, domOption3];

    console.log(domHeader);
    console.log(test);

  for(var i  = 0; i < test.length; i++){
   
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

$(".test-button").on("click", function(){
  console.log("the loop is the thing not working")
  
  var testData = parseInt($(this).attr("correctChoice"));

  console.log(testData);
  if(testData === 2 && $("#question").text() === questionLog[0] ){
    console.log("this click is working");
  }

});

//questionToScreen(testQuestion);