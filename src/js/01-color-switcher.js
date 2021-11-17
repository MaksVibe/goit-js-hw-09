const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

let timer;

startBtn.addEventListener("click", () => {
  timer = setInterval(() => {
    let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.querySelector("body").style.backgroundColor = bgColor;
    return;
  }, 500);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});
