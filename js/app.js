//Issues:
//Does not stop after 9 moves

$(document).ready(function() {

  var $square = $(".box");
  var turnCount = 0;

//("#square1, #square2, #square3, #square4, #square5, #square6, #square7, #square8, #square9")
//TurnTaker
  $(".box").click(function turnTaker() {
    var square = $(this);
      if ($(this).html() === '') {
        if (turnCount % 2 === 0) {
          square.text("X");
          $("#message").text("Your turn O.");
        } else {
          square.text("O");
          $("#message").text("Your turn X.");
        }
        turnCount ++;
      } else {
        return false;
      }
  });



//Resets the board after a winner is reached
  $("#reset").click(function boardClearer() {
//alert("yes, im here");
  $square.text("");
  });

//Check the winning pattern
$(".box").click(function winChecker() {
  if( $("#square1").text() === "X" && //horizontalX
    $("#square2").text() === "X" &&
    $("square3").text() === "X" ) {
      $("#message").text("Player X wins.");
  } else if
    ( $("#square4").text() === "X" &&
    $("#square5").text() === "X" &&
    $("#square6").text() === "X" ) {
      $("#message").text("Player X wins.");
  } else if
    ( $("#square7").text() === "X" &&
    $("#square8").text() === "X" &&
    $("#square9").text() === "X" ) {
      $("#message").text("Player X wins.");
  } else if
    ( $("#square1").text() === "X" && //verticalX
    $("#square4").text() === "X" &&
    $("#square7").text() === "X" ) {
      $("#message").text("Player X wins.");
  } else if
    ( $("#square2").text() === "X" &&
    $("square5").text() === "X" &&
    $("square8").text() === "X" ) {
      $("#message").text("Player X wins.");
  } else if
    ( $("#square3").text() === "X" &&
    $("#square6").text() === "X" &&
    $("#square9").text() === "X" ) {
      $("#message").text("Player X wins.");
  } else if
    ( $("#square1").text() === "X" && //diagonalX
    $("#square5").text() === "X" &&
    $("#square9").text() === "X" ) {
      $("#message").text("Player X wins.");
  } else if
    ( $("#square3").text() === "X" &&
    $("#square5").text() === "X" &&
    $("#square7").text() === "X" ) {
      $("#message").text("Player X wins.");
  } else if
    ( $("#square1").text() === "O" && //horizontalO
    $("#square2").text() === "O" &&
    $("square3").text() === "O" ) {
      $("#message").text("Player O wins.");
  } else if
    ( $("#square4").text() === "O" &&
    $("#square5").text() === "O" &&
    $("square6").text() === "O" ) {
      $("#message").text("Player O wins.");
  } else if
    ( $("#square7").text() === "O" &&
    $("#square8").text() === "O" &&
    $("square9").text() === "O" ) {
      $("#message").text("Player O wins.");
  } else if
    ( $("#square1").text() === "O" && //verticalO
    $("#square4").text() === "O" &&
    $("square7").text() === "O" ) {
      $("#message").text("Player O wins.");
  } else if
    ( $("#square2").text() === "O" &&
    $("square5").text() === "O" &&
    $("square8").text() === "O" ) {
      $("#message").text("Player O wins.");
  } else if
    ( $("#square3").text() === "O" &&
    $("#square6").text() === "O" &&
    $("#square9").text() === "O" ) {
      $("#message").text("Player O wins.");
  } else if
    ( $("#square1").text() === "O" && //diagonalY
    $("#square5").text() === "O" &&
    $("#square9").text() === "O" ) {
      $("#message").text("Player O wins.");
  } else if
    ( $("#square3").text() === "O" &&
    $("#square5").text() === "O" &&
    $("#square7").text() === "O" ) {
      $("#message").text("Player O wins.");
  } else if
    ( turnCount === 9 ) {                 //??
      $("#message").text("It's a tie.");
  }
});

});
