var winLossBoxText= "<p>Wins: </p><p>Losses: <p>"
var targetBoxText ="Your target is: ";
var wins = 0;
var winsText = "0";
var losses = 0;
var lossesText = "0";

// objects and functions
//
var randomizer = {targetNumer: 0, runningTotal: 0, lapisNumber: 0, onyxNumber: 0, quartzNumber: 0, turquoizeNumber: 0,
  chooseRandomNumbers: function() {
    targetNumber = Math.floor((Math.random() * 101) )+ 19;
    lapisNumber = Math.floor((Math.random() * 11) ) + 1;
    onyxNumber = Math.floor((Math.random() * 11) ) + 1;
    quartzNumber = Math.floor((Math.random() * 11) ) + 1;
    turquoizeNumber = Math.floor((Math.random() * 11) ) + 1;


    runningTotal = 0;
    return (true);
  }};

  function displayWinsLosses () {
    winsText = wins.toString();
    lossesText = losses.toString();
    winLossBoxText = "wins: ";
    winLossBoxText = winLossBoxText.concat(winsText);
    winLossBoxText = winLossBoxText.concat("<p></p>");
    winLossBoxText = winLossBoxText.concat("Losses: ");
    winLossBoxText = winLossBoxText.concat(lossesText);
    $("#winLossBox").html(winLossBoxText);
  }

  function displayTargetNumber () {
    targetBoxText = "Your target is ";
    targetBoxText = targetBoxText.concat(targetNumber.toString());
    $("targetBox").html(targetBoxText);
  }


  function displayRunningTotal ( n ) {
    $("#runningScoreBox").html(n.toString());
  }

/* Begin Activity */

$("document").ready(function(){

/* do the initial set up of numbers */

    randomizer.chooseRandomNumbers ();

    displayTargetNumber ();
    displayWinsLosses ();
    displayRunningTotal (0);

    $("button").addClass("value");
    $("button").on("click", function(){

      switch (this.id) {
        case "lapisButton" :
              runningTotal += lapisNumber;
              break;

      case "onyxButton" :
              runningTotal += onyxNumber;
              break;

      case "quartzButton" :
              runningTotal += quartzNumer;
              break;
      case "turquoizeNumber" :
              runningTotal += turquoizeNumber;
              break;
      default:
              break;
            }

            		if (runningTotal > targetNumber ) {
            			losses++;
                  displayWinsLosses ()
            			alert ("You lose!");
            			randomizer.chooseRandomNumbers ();
                  displayTargetNumber ();
                  displayRunningTotal (0);
            			}

            		else if (runningTotal == targetNumber ) {
            			wins++;
                  displayWinsLosses ()
            			alert ("You win!");
            			randomizer.chooseRandomNumbers ();
                  displayTargetNumber ();
                  displayRunningTotal (0);
            			}

            		else {
                 displayRunningTotal (runningTotal);
                  }

               });  // end of onClick

               });  // end of documentReady
