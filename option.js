const counter = document.querySelector(".number");
const btnInc = document.querySelector(".btn1");
const btnDec = document.querySelector(".btn2");
const btnClr = document.querySelector(".btn3");

let countNum = 0;

const updateCounter = (n) => {
  if (countNum + n < 0) {
    return;
  }
  countNum += n;
  counter.textContent = countNum;
};

btnInc.addEventListener("click", () => updateCounter(1));
btnDec.addEventListener("click", () => updateCounter(-1));
btnClr.addEventListener("click", () => updateCounter(-countNum));



document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
    }
});
