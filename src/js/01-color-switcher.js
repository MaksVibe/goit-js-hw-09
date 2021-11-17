const startBtn = document.querySelector("data-start");
const stopBtn = document.querySelector("data-stop");
let timer = null;

startBtn.addEventListener("click", () => {
  timer = setInterval(() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }, 500);
});
