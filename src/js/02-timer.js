import flatpickr from "flatpickr";
import Notiflix from "notiflix";
import "flatpickr/dist/flatpickr.min.css";

const timer = document.querySelector(".timer");
const fields = document.querySelector(".timer").children;

let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
    }
    console.log(selectedDates[0]);
  },
};
console.log(options.defaultDate);
flatpickr("#datetime-picker", options);

document.querySelector("[data-start]").addEventListener("click", () => {});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Stylization
timer.style.display = "flex";
timer.style.gap = "30px";

for (const field of fields) {
  field.style.display = "flex";
  field.style.flexDirection = "column";
  field.style.alignItems = "center";
  field.firstElementChild.style.fontSize = "48px";
  field.lastElementChild.style.fontSize = "24px";
}
