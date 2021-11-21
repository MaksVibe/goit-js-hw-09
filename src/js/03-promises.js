import Notiflix from "notiflix";

const form = document.querySelector(".form");
const amount = document.querySelector("input[name='amount']");
const firstDelay = document.querySelector("input[name='delay']");
const step = document.querySelector("input[name='step']");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let delay = Number(firstDelay.value);
  for (let i = 0; i <= Number(amount.value - 1); i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += Number(step.value);
  }
});
