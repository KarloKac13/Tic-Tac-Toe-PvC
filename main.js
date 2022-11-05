"use strict"

// Boolean for switching players
let player1 = true;
let player2 = false;

//All fields by ID in array
let arr = [
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
  document.getElementById("four"),
  document.getElementById("five"),
  document.getElementById("six"),
  document.getElementById("seven"),
  document.getElementById("eight"),
  document.getElementById("nine")
];

//Selected elements for display
let gameDisplay = document.getElementById("display");
gameDisplay.style.display = "none";
let chooserDisplay = document.getElementById("choose");
chooserDisplay.style.display = true;
let chooserDisplayOptions = document.getElementById("options");
chooserDisplayOptions.style.display = true;

// Stored winner/draw/current player strings
let winner = "Player wins!";
let winner2 = "Computer wins!";
const draw = "It's a draw!";

//Displays elements based on click // And switches players boolean // 
//And switching turn text // And winner text
let chosenX = document.getElementById("x").addEventListener("click", function () {
  gameDisplay.style.display = "flex";
  chooserDisplay.style.display = "none";
  chooserDisplayOptions.style.display = "none";
  player1 = true;
  player2 = false;
  winner = "Player wins!";
  winner2 = "Computer wins!";
});

let chosenO = document.getElementById("o").addEventListener("click", function () {
  gameDisplay.style.display = "flex";
  chooserDisplay.style.display = "none";
  chooserDisplayOptions.style.display = "none";
  player2 = true;
  player1 = false;
  winner2 = "Player wins!";
  winner = "Computer wins!";
});

let noValueFieldArr = [];
let arrayOfO = [];
let arrayOfX = [];

// All the game logic // Added options to choose X or O
document.querySelectorAll(".mainDivs").forEach(function (el) {
    el.addEventListener(
      "click", async function () {

        // Player 1 logic / Computer
        if (player1 === true) {
          let promise = new Promise((resolve, reject) => {
            resolve(el.innerHTML = "X", player1 = false)
          })

          await promise;

          async function fieldCheckX() {
            let promise = new Promise((resolve, reject) => {
              resolve(
                arr.forEach((element) => {
                  if (element.innerHTML === "") {
                    noValueFieldArr.push(element);
                  }
                })
              )
            });
            // .then(arr[Math.floor(Math.random() * arr.length)]);

            await promise;
            let randomField = noValueFieldArr[Math.floor(Math.random() * noValueFieldArr.length)];

            setTimeout(() => {
              if (
                one.innerHTML === "X" &&
                two.innerHTML === "X" &&
                three.innerHTML === "X"
              ) {
                !randomField;
                one.style.color = "red";
                two.style.color = "red";
                three.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              } else if (
                one.innerHTML === "X" &&
                five.innerHTML === "X" &&
                nine.innerHTML === "X"
              ) {
                !randomField;
                one.style.color = "red";
                five.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              } else if (
                one.innerHTML === "X" &&
                four.innerHTML === "X" &&
                seven.innerHTML === "X"
                ) {
                !randomField;
                one.style.color = "red";
                four.style.color = "red";
                seven.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              } else if (
                two.innerHTML === "X" &&
                five.innerHTML === "X" &&
                eight.innerHTML === "X"
              ) {
                !randomField;
                two.style.color = "red";
                five.style.color = "red";
                eight.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              } else if (
                three.innerHTML === "X" &&
                six.innerHTML === "X" &&
                nine.innerHTML === "X"
              ) {
                !randomField;
                three.style.color = "red";
                six.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              } else if (
                four.innerHTML === "X" &&
                five.innerHTML === "X" &&
                six.innerHTML === "X"
              ) {
                !randomField;
                four.style.color = "red";
                five.style.color = "red";
                six.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              } else if (
                seven.innerHTML === "X" &&
                eight.innerHTML === "X" &&
                nine.innerHTML === "X"
              ) {
                !randomField;
                seven.style.color = "red";
                eight.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              } else if (
                three.innerHTML === "X" &&
                five.innerHTML === "X" &&
                seven.innerHTML === "X"
              ) {
                !randomField;
                three.style.color = "red";
                five.style.color = "red";
                seven.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              } else if (
                one.innerHTML !== "" &&
                two.innerHTML !== "" &&
                three.innerHTML !== "" &&
                four.innerHTML !== "" &&
                five.innerHTML !== "" &&
                six.innerHTML !== "" &&
                seven.innerHTML !== "" &&
                eight.innerHTML !== "" &&
                nine.innerHTML !== "" &&
                one.style.color !== "red" &&
                two.style.color !== "red" &&
                three.style.color !== "red" &&
                four.style.color !== "red" &&
                five.style.color !== "red" &&
                six.style.color !== "red" &&
                seven.style.color !== "red" &&
                eight.style.color !== "red" &&
                nine.style.color !== "red"
              ) {
                !randomField;
                document.getElementById("player").innerHTML = draw;
              } else {
                randomField.innerHTML = "O";
                arrayOfO.push(randomField);
                arrayO.forEach(item => {
                  if (item.innerHTML === "O") {
                    item.style.pointerEvents = "none"
                  }
                })
              };

              if (
                one.innerHTML === "O" &&
                two.innerHTML === "O" &&
                three.innerHTML === "O"
              ) {
                !randomField;
                one.style.color = "red";
                two.style.color = "red";
                three.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              };

              if (
                one.innerHTML === "O" &&
                five.innerHTML === "O" &&
                nine.innerHTML === "O"
              ) {
                !randomField;
                one.style.color = "red";
                five.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              };

              if (
                one.innerHTML === "O" &&
                four.innerHTML === "O" &&
                seven.innerHTML === "O"
              ) {
                !randomField;
                one.style.color = "red";
                four.style.color = "red";
                seven.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              };                

              if (
                two.innerHTML === "O" &&
                five.innerHTML === "O" &&
                eight.innerHTML === "O"
              ) {
                !randomField;
                two.style.color = "red";
                five.style.color = "red";
                eight.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              };               

              if (
                three.innerHTML === "O" &&
                six.innerHTML === "O" &&
                nine.innerHTML === "O"
              ) {
                !randomField;
                three.style.color = "red";
                six.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              };              

              if (
                four.innerHTML === "O" &&
                five.innerHTML === "O" &&
                six.innerHTML === "O"
              ) {
                !randomField;
                four.style.color = "red";
                five.style.color = "red";
                six.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              };
               
              if (
                seven.innerHTML === "O" &&
                eight.innerHTML === "O" &&
                nine.innerHTML === "O"
              ) {
                !randomField;
                seven.style.color = "red";
                eight.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              };               

              if (
                three.innerHTML === "O" &&
                five.innerHTML === "O" &&
                seven.innerHTML === "O"
              ) {
                !randomField;
                three.style.color = "red";
                five.style.color = "red";
                seven.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              };

            }, 500);
            
            noValueFieldArr = [];
          }
          fieldCheckX();
          player1 = true;
          
        }

        //Player 2 logic / Computer
        if (player2 === true) {
          let promise = new Promise((resolve, reject) => {
            resolve((el.innerHTML = "O"), (player2 = false));
          });

          await promise;

          async function fieldCheckO() {
          let promise = new Promise((resolve, reject) => {
            resolve(
              arr.forEach((element) => {
                if (element.innerHTML === "") {
                  noValueFieldArr.push(element);
                }
              }),

            )
          });
            
            await promise;
            
          let randomField = noValueFieldArr[Math.floor(Math.random() * noValueFieldArr.length)];
            setTimeout(() => {
              if (
                one.innerHTML === "O" &&
                two.innerHTML === "O" &&
                three.innerHTML === "O"
              ) {
                !randomField;
                one.style.color = "red";
                two.style.color = "red";
                three.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              } else if (
                one.innerHTML === "O" &&
                five.innerHTML === "O" &&
                nine.innerHTML === "O"
              ) {
                !randomField;
                one.style.color = "red";
                five.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              } else if (
                one.innerHTML === "O" &&
                four.innerHTML === "O" &&
                seven.innerHTML === "O"
              ) {
                !randomField;
                one.style.color = "red";
                four.style.color = "red";
                seven.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              } else if (
                two.innerHTML === "O" &&
                five.innerHTML === "O" &&
                eight.innerHTML === "O"
              ) {
                !randomField;
                two.style.color = "red";
                five.style.color = "red";
                eight.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              } else if (
                three.innerHTML === "O" &&
                six.innerHTML === "O" &&
                nine.innerHTML === "O"
              ) {
                !randomField;
                three.style.color = "red";
                six.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              } else if (
                four.innerHTML === "O" &&
                five.innerHTML === "O" &&
                six.innerHTML === "O"
              ) {
                !randomField;
                four.style.color = "red";
                five.style.color = "red";
                six.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              } else if (
                seven.innerHTML === "O" &&
                eight.innerHTML === "O" &&
                nine.innerHTML === "O"
              ) {
                !randomField;
                seven.style.color = "red";
                eight.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              } else if (
                three.innerHTML === "O" &&
                five.innerHTML === "O" &&
                seven.innerHTML === "O"
              ) {
                !randomField;
                three.style.color = "red";
                five.style.color = "red";
                seven.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner2;
              } else if (
                one.innerHTML !== "" &&
                two.innerHTML !== "" &&
                three.innerHTML !== "" &&
                four.innerHTML !== "" &&
                five.innerHTML !== "" &&
                six.innerHTML !== "" &&
                seven.innerHTML !== "" &&
                eight.innerHTML !== "" &&
                nine.innerHTML !== "" &&
                one.style.color !== "red" &&
                two.style.color !== "red" &&
                three.style.color !== "red" &&
                four.style.color !== "red" &&
                five.style.color !== "red" &&
                six.style.color !== "red" &&
                seven.style.color !== "red" &&
                eight.style.color !== "red" &&
                nine.style.color !== "red"
              ) {
                !randomField;
                document.getElementById("player").innerHTML = draw;
              } else {
                randomField.innerHTML = "X";
                arrayOfX.push(randomField);
                arrayOfX.forEach(item => {
                  if (item.innerHTML === "X") {
                    item.style.pointerEvents = "none"
                  }
                })
              };

              if (
                one.innerHTML === "X" &&
                two.innerHTML === "X" &&
                three.innerHTML === "X"
              ) {
                !randomField;
                one.style.color = "red";
                two.style.color = "red";
                three.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              }

              if (
                one.innerHTML === "X" &&
                five.innerHTML === "X" &&
                nine.innerHTML === "X"
              ) {
                !randomField;
                one.style.color = "red";
                five.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              }

              if (
                one.innerHTML === "X" &&
                four.innerHTML === "X" &&
                seven.innerHTML === "X"
              ) {
                !randomField;
                one.style.color = "red";
                four.style.color = "red";
                seven.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              }

              if (
                two.innerHTML === "X" &&
                five.innerHTML === "X" &&
                eight.innerHTML === "X"
              ) {
                !randomField;
                two.style.color = "red";
                five.style.color = "red";
                eight.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              }

              if (
                three.innerHTML === "X" &&
                six.innerHTML === "X" &&
                nine.innerHTML === "X"
              ) {
                !randomField;
                three.style.color = "red";
                six.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              }

              if (
                four.innerHTML === "X" &&
                five.innerHTML === "X" &&
                six.innerHTML === "X"
              ) {
                !randomField;
                four.style.color = "red";
                five.style.color = "red";
                six.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              }

              if (
                seven.innerHTML === "X" &&
                eight.innerHTML === "X" &&
                nine.innerHTML === "X"
              ) {
                !randomField;
                seven.style.color = "red";
                eight.style.color = "red";
                nine.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              }

              if (
                three.innerHTML === "X" &&
                five.innerHTML === "X" &&
                seven.innerHTML === "X"
              ) {
                !randomField;
                three.style.color = "red";
                five.style.color = "red";
                seven.style.color = "red";
                document.querySelectorAll(".mainDivs").forEach(function (el) {
                  el.style.pointerEvents = "none";
                });
                document.getElementById("player").innerHTML = winner;
              }

            }, 500)
          noValueFieldArr = [];
          }
          fieldCheckO();
          player2 = true;
        }  
    }, { once: true });
});

//On window refresh button
//Basically a button that refreshes the page (F5)
function reset() {
    window.location.reload();
};