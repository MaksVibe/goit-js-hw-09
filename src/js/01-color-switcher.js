const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timer;

startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", "true");
  timer = setInterval(() => {
    return (document.querySelector(
      "body"
    ).style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled");
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});
