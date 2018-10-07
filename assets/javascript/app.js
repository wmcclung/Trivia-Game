//put on dom
$(document).ready(function() {
  //variables
  var totalQuiz = 6,
    answers = [
      "tonyHawk",
      "birdhouse",
      "rodneyMullen",
      "california",
      "thrasher",
      "bodyVarial",
    ],
    data = $("input"),
    correctAnswer = 0,
    incorrectAnswer = 0,
    blank = 0,
    count = 30;

  //set up for loop for checking answers

  function scoreCount() {
    for (var i = 0; i < data.length; i++) {
      // If user selected an answer
      if (data[i].checked) {
        // check if what the user select is equal to the array answers

        if (answers.indexOf(data[i].value) !== -1) {
          correctAnswer++;
        } else {
          incorrectAnswer++;
        }
      }
    }
    //subtract blank answers

    var totalAnswered = correctAnswer + incorrectAnswer;
    console.log(totalAnswered);
    if (totalAnswered !== totalQuiz) {
      blank = totalQuiz - totalAnswered;
    }

    $("#correct").html(" " + correctAnswer);
    $("#incorrect").html(" " + incorrectAnswer);
    $("#blank").html(" " + blank);
  }

  //hide quiz until click begin
  $("#quiz, #results").hide();

  //questions show and timer starts\\
  $("#play").click(function() {
    $("#start").hide("slow");
    $("#quiz").show("slow");

    //Setup timer

    var startTimer = setInterval(function() {
      count--;
      $("#countdown").html(count);

      //if user runs out of time finish game

      if (count === 0) {
        clearInterval(timer);
        $("#quiz, #timer").hide("slow");
        $("#results").show("slow");
        scoreCount();
      }
    }, 1000);
  });

  //done button show results//

  $("#done").click(function() {
    $("#quiz, #timer").hide("slow");
    $("#results").show("slow");
    clearInterval(timer);
    scoreCount();
  });

  //restart button//

  $("#restart").click(function() {
    location.reload();
  });
});
