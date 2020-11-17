

//SETTING PLAYERS-----------------------------------------------------------------------------------------------------------------
var playerAmount = 0;
var players = [];
function AddPlayer() {

  playerAmount++;
  var input = document.getElementById("PlayerName");
  var p = input.value;
  players.push(p);
  input.value = "";
  document.getElementById("addedplayers").innerHTML += (p + ", ");

}

function StartGame() { //takes amount of players from input and adjusts the column amount accordingly
  let root = document.documentElement;
  let playerHolder = document.getElementById("playercontainer"); //div that holds the player icons

  //setting the player amount for css so the grid will be set just right
  //therese probably a better way to do this but oh well
  root.addEventListener("click", e => {
    root.style.setProperty('--playerColumnCount', playerAmount);
  });

  players.forEach(element => {
    let newBlock = document.createElement("p");
    newBlock.setAttribute("id", "playerblock")
    let playertag = document.createTextNode(element);

    newBlock.appendChild(playertag);
    //document.body.insertBefore(newBlock, playerHolder);
    playerHolder.appendChild(newBlock);
  });

  //HIDE ADD PLAYERS DIV
  var x = document.getElementsByClassName("addplayers");
  x[0].className += " hidden";

  //SHOW PROMPT DIV
  x = document.getElementsByClassName("taskarea-hidden");
  if (x != null) {
    x[0].className = "taskarea";
  }
}

// PROMPT VARIABLES

var promptArray = [];
var parseObj; //parsed prompts
var promptsLeft; //how many prompts are left

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

      promptsLeft = 0;
      while (promptsLeft < parseObj.length) {
        promptsLeft++;
      }

      //shuffle
      let ind = RandomIndex();
      var promptItem = parseObj[ind];
      $("#promptHere").text(promptItem.prompt);

    },
  });
});

//CHANGE TO NEXT PROMPT-----------------------------------------------------------------------------------------------------
function NextPrompt() {
  let ind = RandomIndex();
  // promptIndex++;
  if (promptsLeft > 0) {
    promptItem = parseObj[ind];
    $("#promptHere").text(promptItem.prompt_id + " " + promptItem.prompt);
  }
  else {
    $("#promptHere").text("all prompts completed, thanks for playing");
    // hide next button
  }
}
//SHUFFLE PROMPTS---------------------------------------------------------------------------------------------------------
function RandomIndex() {
  var min = 0;
  var max = promptsLeft;
  var nextIndex = Math.floor(Math.random() * (max - min + 1) + min); //inclusive min and max
  promptsLeft--;
  return nextIndex;
}


//NOT GAME RELATED--------------------------------------------------------------------------------------------------------------
//toggle nav bar
function ToggleNavBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//check if the user really wants to leave window
function OnBeforeUnload() {
  return "ahaa eli täytyy return jotain ok";
}