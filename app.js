let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;
const winPattarn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Clicked");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattarn of winPattarn) {
    let pos1val = boxes[pattarn[0]].innerText;
    let pos2val = boxes[pattarn[1]].innerText;
    let pos3val = boxes[pattarn[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
      }
    }
  }
};
