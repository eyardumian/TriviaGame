//load all documents before starting game
$(document).ready(function(){

  var questions = [];
  questions[0] = "What was the hangout of the 90210 gang?",
  questions[1] = "Who was Beavis's friend?",
  questions[2] = "In what year was the World Wide Web introduced to the public?",
  questions[3] = "Which Pixar-Disney movie was the first animated film to be completely computer generated?",
  questions[4] = "In what year was Princess Diana killed in a car crash in Paris?",
  questions[5] = "What was Phoebe's most famous song on the hit sitcom Friends?",
  questions[6] = "What is the name of the nerdy neighbor in the show Family Matters?",
  questions[7] = "Which rap group wore their pants backwards?";

  var choices0 = ["Billy's Diner","The Peach Pit","Matt's Place","Roy's Grill"];
  var choices1 = ["George","Will","Butt-head","Bird-Brain"];
  var choices2 = ["1991","1990","1999","1996"];
  var choices3 = ["Monster Inc.","A Bug's Life","The Little Mermaid","Toy Story"];
  var choices4 = ["1997","1990","1999","1993"];
  var choices5 = ["Silly Face","Janitor Blues","Smelly Cat","Stinky Skunk"];
  var choices6 = ["Billy Bob","Screech Smith","Niles Crane","Steve Urkel"];
  var choices7 = ["Kriss Kross","Backward Rappers","Snoop Dogg","Tupac Shakur"];

  var answers = [];
  answers[0] = ['The Peach Pit'],
  answers[1] = ['Butt-head'],
  answers[2] = ['1991'],
  answers[3] = ['Toy Story'],
  answers[4] = ['1997'],
  answers[5] = ['Smelly Cat'],
  answers[6] = ['Steve Urkel'],
  answers[7] = ['Kriss Kross'];

//most elements are hidden until start button is clicked
$('h3').hide();
$('p').hide();
$('#input').hide();
$('.radioButton').hide();
$('#doneButton').hide();

//When the start button is clicked, other elements appear and the timer begins counting down
  $('#startButton').click(function() {

    $('h3').show();
    $('p').show();
    $('.radioButton').show();
    $('#startButton').hide();
    $('#doneButton').show();
    $('#done').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#unanswered').hide();

    //Display questions and answers in html-(HOW CAN I CODE THIS USING A SHORTER METHOD?)
    document.getElementById('questionZero').innerHTML = questions[0];
    document.getElementById('firstAnswer0').innerHTML = "<input type='radio' name='question0' value='false'>" + choices0[0];
    document.getElementById('secondAnswer0').innerHTML = "<input type='radio' name='question0' value='true'>" + choices0[1];
    document.getElementById('thirdAnswer0').innerHTML = "<input type='radio' name='question0' value='false'>" + choices0[2];
    document.getElementById('fourthAnswer0').innerHTML = "<input type='radio' name='question0' value='false'>" + choices0[3];

    document.getElementById('questionOne').innerHTML = questions[1];
    document.getElementById('firstAnswer1').innerHTML = "<input type='radio' name='question1' value='false'>" + choices1[0];
    document.getElementById('secondAnswer1').innerHTML = "<input type='radio' name='question1' value='false'>" + choices1[1];
    document.getElementById('thirdAnswer1').innerHTML = "<input type='radio' name='question1' value='true'>" + choices1[2];
    document.getElementById('fourthAnswer1').innerHTML = "<input type='radio' name='question1' value='false'>" + choices1[3];

    document.getElementById('questionTwo').innerHTML = questions[2];
    document.getElementById('firstAnswer2').innerHTML = "<input type='radio' name='question2' value='true'>" + choices2[0];
    document.getElementById('secondAnswer2').innerHTML = "<input type='radio' name='question2' value='false'>" + choices2[1];
    document.getElementById('thirdAnswer2').innerHTML = "<input type='radio' name='question2' value='false'>" + choices2[2];
    document.getElementById('fourthAnswer2').innerHTML = "<input type='radio' name='question2' value='false'>" + choices2[3];

    document.getElementById('questionThree').innerHTML = questions[3];
    document.getElementById('firstAnswer3').innerHTML = "<input type='radio' name='question3' value='false'>" + choices3[0];
    document.getElementById('secondAnswer3').innerHTML = "<input type='radio' name='question' value='false'>" + choices3[1];
    document.getElementById('thirdAnswer3').innerHTML = "<input type='radio' name='question3' value='false'>" + choices3[2];
    document.getElementById('fourthAnswer3').innerHTML = "<input type='radio' name='question3' value='true'>" + choices3[3];

    document.getElementById('questionFour').innerHTML = questions[4];
    document.getElementById('firstAnswer4').innerHTML = "<input type='radio' name='question4' value='true'>" + choices4[0];
    document.getElementById('secondAnswer4').innerHTML = "<input type='radio' name='question4' value='false'>" + choices4[1];
    document.getElementById('thirdAnswer4').innerHTML = "<input type='radio' name='question4' value='false'>" + choices4[2];
    document.getElementById('fourthAnswer4').innerHTML = "<input type='radio' name='question4' value='false'>" + choices4[3];

    document.getElementById('questionFive').innerHTML = questions[5];
    document.getElementById('firstAnswer5').innerHTML = "<input type='radio' name='question5' value='false'>" + choices5[0];
    document.getElementById('secondAnswer5').innerHTML = "<input type='radio' name='question5' value='false'>" + choices5[1];
    document.getElementById('thirdAnswer5').innerHTML = "<input type='radio' name='question5' value='true'>" + choices5[2];
    document.getElementById('fourthAnswer5').innerHTML = "<input type='radio' name='question5' value='false'>" + choices5[3];

    document.getElementById('questionSix').innerHTML = questions[6];
    document.getElementById('firstAnswer6').innerHTML = "<input type='radio' name='question6' value='false'>" + choices6[0];
    document.getElementById('secondAnswer6').innerHTML = "<input type='radio' name='question6' value='false'>" + choices6[1];
    document.getElementById('thirdAnswer6').innerHTML = "<input type='radio' name='question6' value='false'>" + choices6[2];
    document.getElementById('fourthAnswer6').innerHTML = "<input type='radio' name='question6' value='true'>" + choices6[3];

    document.getElementById('questionSeven').innerHTML = questions[7];
    document.getElementById('firstAnswer7').innerHTML = "<input type='radio' name='question7' value='true'>" + choices7[0];
    document.getElementById('secondAnswer7').innerHTML = "<input type='radio' name='question7' value='false'>" + choices7[1];
    document.getElementById('thirdAnswer7').innerHTML = "<input type='radio' name='question7' value='false'>" + choices7[2];
    document.getElementById('fourthAnswer7').innerHTML = "<input type='radio' name='question7' value='false'>" + choices7[3];

    //set the timer to count down to 0 (used Stackoverflow for help)**UNSURE AS TO WHY TIMER DISPLAY IS DELAYED
    var count = 41
    var counter = setInterval(timer, 1000);
    function timer() {
      count = count - 1;
      document.getElementById('timer').innerHTML = 'Time Remaining:' + ' ' + count + ' ' + 'Seconds';
      // Stopping the counter when reaching 0.
      if (count ===-1) {
        clearInterval(timer);
        $('h3').hide();
        $('p').hide();
        $('#input').hide();
        $('.radioButton').hide();
        $('#doneButton').hide();
        $('#done').show();
        $('#correctAnswers').show();
        $('#incorrectAnswers').show();
        $('#unanswered').show();
        score();
      }
    }
  });

  //THIS IS INCORRECT. THE CORRECT SCORE WON'T DISPLAY.
  var correctAns = 0;
  function score() {
   if (document.getElementById('secondAnswer0').checked = true) {
  /*  if (document.getElementById('thirdAnswer1').checked = true)
    if (document.getElementById('firstAnswer2').checked = true)
    if (document.getElementById('fourthAnswer3').checked = true)
    if (document.getElementById('firstAnswer4').checked = true)
    if (document.getElementById('thirdAnswer5').checked = true)
    if (document.getElementById('fourthAnswer6').checked = true)
    if (document.getElementById('firstAnswer7').checked = true) */ 
      correctAns++;
    } else {
      incorrectans++;
    }
    console.log(correctAns);
};

  $('#doneButton').click(function() {
    clearInterval(timer);
    $('h3').hide();
    $('p').hide();
    $('#input').hide();
    $('.radioButton').hide();
    $('#doneButton').hide();
    $('#done').show();
    score();

  });

  //THIS WON'T DISPLAY CORRECTLY
  document.getElementById('correctAnswers').innerHTML = 'Correct Answers:' + ' ' + correctAns;
  //document.getElementById('incorrectAnswers').innerHTML = 'Incorrect Answers:' + ' ' + incorrectAns;
  //document.getElementById('unanswered').innerHTML = 'Unanswered:' + ' ' + unans;


});
