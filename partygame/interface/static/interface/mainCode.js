
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

  players.forEach(element => console.log(element));

}

function StartGame() { // (later) takes amount of players from input and adjusts the column amount accordingly
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
  console.log(x);
  x[0].className += " hidden";

  //SHOW PROMPT DIV
  var x = document.getElementsByClassName("taskarea-hidden");
  console.log(x);
  if (x != null) {
    x[0].className = "taskarea";
  }
}

// PROMPT VARIABLES

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
//toggle nav bar
function ToggleNavBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
