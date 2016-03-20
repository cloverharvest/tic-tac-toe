// wait for the DOM to finish loading
$(document).ready(function() {

  var $square = $(".box");
  //var boxes = squares.eq(0);
  var turn;

//("#square1, #square2, #square3, #square4, #square5, #square6, #square7, #square8, #square9")
  //TurnTaker
  $(".box").on("click", function turnTaker() {
    var square = $(this);
      if (turn === 0) {
        turn = 1;
        square.text("X");
      } else {
        turn = 0;
        square.text("O");
      }
  });

  //Resets the board after a winner is reached
  $("#reset").on("click", function boardClearer() {
    //alert("yes, im here");
    $("li").text("");

  });

 //Check the winning pattern
  function threeInARow($firstSquare, $secondSquare, $thirdSquare) {
    var firstSquareOwner = $firstSquare.text();
    var secondSquareOwner = $secondSquare.text();
    var thirdSquareOwner = $thirdSquare.text();

    if (firstSquareOwner === secondSquareOwner && secondSquareOwner === thirdSquareOwner) {
      if (firstSquareOwner === "X") {
        return "X";
      } else {
        return "O";
      }
      return null;
    }
  }

  function rowWinner() {
    var topRow = threeInARow($square.eq(0), $square.eq(1), $square.eq(2));
    var middleRow = threeInARow($square.eq(3), $square.eq(4), $square.eq(5));
    var bottomRow = threeInARow($square.eq(6), $square.eq(7), $square.eq(8));
    return topRow || middleRow || bottomRow;
  }




});
