//VARIABLES

var promptArray = [];
var parseObj; //parsed prompts
var promptIndex = 0; //index of current prompt

// GET ALL THE PROMPTS-------------------------------------------------------------------------------------------------------

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/api/?format=json",
    dataSrc: "",
    //error: function (xhr, statusText, err) {
    //  console.log("error" + xhr.status);
    //},
    success: function (data) {
      var stringObj = JSON.stringify(data);
      parseObj = JSON.parse(stringObj);

      var i = 0;
      while (i < parseObj.length) {
        promptArray.push(i);
        i++;
      }

      //shuffle

      var promptItem = parseObj[promptIndex];

      $("#promptHere").text(promptItem.prompt);


    },
  });
});

//CHANGE TO NEXT PROMPT-----------------------------------------------------------------------------------------------------
function NextPrompt() {
  promptIndex++;
  if (promptIndex < parseObj.length) {
    promptItem = parseObj[promptIndex];
    $("#promptHere").text(promptItem.prompt);
  }
  else {
    $("#promptHere").text("all prompts completed, thanks for playing");
    // hide next button
  }
}
//SHUFFLE PROMPTS---------------------------------------------------------------------------------------------------------
function ShufflePrompts() {


}



//NOT GAME RELATED--------------------------------------------------------------------------------------------------------------
function ToggleNavBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function SetPlayerAmount(amount) { // (later) takes amount of players from input and adjusts the column amount accordingly
  let root = document.documentElement;

  root.addEventListener("click", e => {
    root.style.setProperty('--playerColumnCount', amount);
  });
}