const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timer;

startBtn.addEventListener("click", () => {
  timer = setInterval(() => {
    return (document.querySelector(
      "body"
    ).style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});
