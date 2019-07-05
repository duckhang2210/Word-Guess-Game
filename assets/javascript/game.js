//Global var
//******************************************************************************* 
var question = ["What is the name of Jon's direwolf?",
                "Who is Jon Snow's father?",
                "Who is king of Westeros when the the series begins?", 
                "What is the name of the continent where 'Game of Thrones' takes place?",
                "What was the name of the person who chopped off Jaime's right hand?",
                "Who killed the Night King",
                "At the end of season 2, Joffrey Baratheon sits on the Iron Throne, but which Baratheon is actually the rightful king?",
                "Who was the Lightning Lord?",
                '"Hold the door"',
                '"I drink, and I know things"',
                "By what name do the Seven Kingdoms refer to the Free Folk who live in north beyond the Wall?",
                "Who was Hand of the King before Eddard Stark?",
                '"What do we say to the God of Death?"',
                "Who is Joffrey, Myrcella and Tommen's real father?"
                ];
      
var answers = ["ghost", "rhaegar targaryen", "robert baratheon", "westeros", "locke","arya stark","stannis baratheon","beric dondarrion","HODOR", "tyrion lannister", "wildlings","jon arryn","not today","jaime lannister"];
              
var randomQuestion = document.getElementById("questionShow");
var ansLetterCount = document.getElementById("letterCount");
var answerInput = document.getElementById("answerShow");
var lastAns = document.getElementById("lastAnswer");
var guestCount;

var guessedLet; //put all the letters that already guessed to this array.

var random;
var rightGuess=[];
var wrongGuess=[];
var score;

var theAnswer;
var underScore = [];


        //Generate underscore
  var generateUnderScore= function(){
        for(var i=0; i<theAnswer.length; i++){  
          if (theAnswer.charAt(i) == " ") {
                underScore.push("&nbsp;");
            } else{
                underScore.push('_');
              }
        }
        
      return underScore.join(' ');
        
    }
var noSpaceAns = function(theAnswer){
  for (var y=0; y < theAnswer.length; y++){

    if (theAnswer[y] == " "){
      theAnswer = theAnswer.replace(" ", "&nbsp;") ;
    }
  }
  return theAnswer;
  }



function begin(){
    guessedLet = [];
    guestCount = 10;
    document.getElementById("guessShow").innerHTML = (guestCount);
    score = 0;
    rightGuess=[];
    document.getElementById("rightAnswer").innerHTML = (rightGuess);
    wrongGuess=[];
    document.getElementById("wrongAnswer").innerHTML = (wrongGuess);
    underScore = [];
  
    random = [Math.floor(Math.random()*question.length)];
    randomQuestion.innerHTML= question[random];
  
  
    
    theAnswer = answers[random].toUpperCase();
    
    noSpaceAns(theAnswer);
    
    
    answerInput.innerHTML = generateUnderScore();
    var howManyLetter = function(){
    var countingLetter = 0;
    for (var x = 0; x < theAnswer.length; x++){
    switch (theAnswer.charAt(x)) {
     case " ":
     break;
     default :
     countingLetter += 1;
     break;
    }
    }
    return countingLetter;
    
    }
    ansLetterCount.innerHTML = howManyLetter();
  
}


document.onkeypress = function(event){
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
  var rightInd = theAnswer.indexOf(userGuess);
  if(((userGuess >= "a") && (userGuess <= "z")) ||((userGuess >= "A") && (userGuess <= "Z"))){
    //Right
    if (rightInd > -1){
    for (var i = 0; i < theAnswer.length; i++){
      if (theAnswer[i] === userGuess){
        underScore[i] = userGuess;
      }
      answerInput.innerHTML = underScore.join(' ');
      }
      for (var y=0; y < theAnswer.length; y++){
        if (theAnswer[y] === " "){
          theAnswer[y]= "&nbsp;";
        }
      }
      // check if the right letter is guessed or not
      if (rightGuess.indexOf(userGuess) < 0){
        rightGuess.push(userGuess);
      }
      
      document.getElementById("rightAnswer").innerHTML = (rightGuess);
      winOrLose();
     }
     //wrong
     else {
       //check if wrong letter is guessed or not
      if (wrongGuess.indexOf(userGuess) < 0){
        wrongGuess.push(userGuess);
        guestCount = guestCount - 1;
      }
       document.getElementById("guessShow").innerHTML = guestCount;
       document.getElementById("wrongAnswer").innerHTML = (wrongGuess);
       winOrLose();
     }
  }
 }


 function resetGame(){
   guessedLet = [];
    rightGuess=[];
    document.getElementById("rightAnswer").innerHTML = (rightGuess);
    wrongGuess=[];
    document.getElementById("wrongAnswer").innerHTML = (wrongGuess);
    underScore = [];
  
    random = [Math.floor(Math.random()*question.length)];
    randomQuestion.innerHTML= question[random];
  
  
    
    theAnswer = answers[random].toUpperCase();
    
    noSpaceAns(theAnswer);
    
    
    answerInput.innerHTML = generateUnderScore();
    var howManyLetter = function(){
    var countingLetter = 0;
    for (var x = 0; x < theAnswer.length; x++){
    switch (theAnswer.charAt(x)) {
     case " ":
     break;
     default :
     countingLetter += 1;
     break;
    }
    }
    return countingLetter;
    
    }
    ansLetterCount.innerHTML = howManyLetter();
  }

    //Win or Lose function
  function winOrLose(){
    if (underScore.join('') === noSpaceAns(theAnswer)){
        score = score + 1;
      document.getElementById("scoreShow").innerHTML = score;
      setTimeout(()=>{alert('Correct')},0);
      setTimeout(()=>{resetGame(),1});
      lastAns.innerHTML = theAnswer;
    }else
    if (guestCount == 0){
      setTimeout(()=>{alert("SHAME! SHAME! SHAME! SHAME!")},0);
      setTimeout(()=>{begin(),1});
      lastAns.innerHTML = theAnswer;
    }
    
   }




begin();

















//      
//      //Get random question
//random = [Math.floor(Math.random()*question.length)];
//
//randomQuestion.innerHTML= question[random];
//    
//
//      //Get the answer's index that matched with random question's index
//var theAnswer = answers[random].toUpperCase();
//var noSpaceAns = function(a){
//for (var y=0; y < theAnswer.length; y++){
//  
//  if (a[y] == " "){
//    a = a.replace(" ", "&nbsp;") ;
//  }
//}
//return a;
//}
//noSpaceAns(theAnswer);
//        
//        
//    
//var underScore = [];
//
//      //Generate underscore
//var generateUnderScore= function(){
//        for(var i=0; i<theAnswer.length; i++){  
//          if (theAnswer.charAt(i) == " ") {
//                underScore.push("&nbsp;");
//            } else{
//                underScore.push('_');
//              }
//        }
//    
//    return underScore.join(' ');
//    
//  }
//    answerInput.innerHTML = generateUnderScore();
//
//    //count letter from the answer
//
//    var howManyLetter = function(){
//      var countingLetter = 0;
//      for (var x = 0; x < theAnswer.length; x++){
//        switch (theAnswer.charAt(x)) {
//          case " ":
//          break;
//          default :
//          countingLetter += 1;
//          break;
//        }
//      }
//      return countingLetter;
//      
//    }
//    ansLetterCount.innerHTML = howManyLetter();
//
//
//
//      
//document.onkeypress = function(event){
//  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
//  var rightInd = theAnswer.indexOf(userGuess);
//
//  if(((userGuess >= "a") && (userGuess <= "z")) ||((userGuess >= "A") && (userGuess <= "Z"))){
//    //Right
//    if (rightInd > -1){
//    for (var i = 0; i < theAnswer.length; i++){
//      if (theAnswer[i] === userGuess){
//        underScore[i] = userGuess;
//      }
//      answerInput.innerHTML = underScore.join(' ');
//      }
//      for (var y=0; y < theAnswer.length; y++){
//        if (theAnswer[y] === " "){
//          theAnswer[y]= "&nbsp;";
//        }
//      }
//      rightGuess.push(userGuess);
//      document.getElementById("rightAnswer").innerHTML = (rightGuess);
//      if (underScore.join('') === noSpaceAns(theAnswer)){
//        document.getElementById("scoreShow").innerHTML = score + 1;
//        setTimeout(()=>{alert('Correct')},0);
//      }
//    }
//    
//    //Wrong
//    else {
//      wrongGuess.push(userGuess);
//      guestCount = guestCount - 1;
//      if (guestCount == 0){
//        setTimeout(()=>{alert("SHAME! SHAME! SHAME! SHAME!")},0);
//      }
//      document.getElementById("guessShow").innerHTML = guestCount;
//      document.getElementById("wrongAnswer").innerHTML = (wrongGuess);
//      }
//  }
//    
//}
//
//    
//  