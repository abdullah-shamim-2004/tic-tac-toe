let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");

let turn0 = true;
const winPattarn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Make some arrow function for reset or new game
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// A function : After win oher box will be disabled
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// make the box enable
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// check who is the winner with loop and condintion
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
    if (count === 9) {
      msg.innerText = "Match Draw! Please try again.";
      msgContainer.classList.remove("hide");
    }
  });
});

// After win this msg will be shown
const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

//check who is the winner of this match
const checkWinner = () => {
  for (let pattarn of winPattarn) {
    let pos1val = boxes[pattarn[0]].innerText;
    let pos2val = boxes[pattarn[1]].innerText;
    let pos3val = boxes[pattarn[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
