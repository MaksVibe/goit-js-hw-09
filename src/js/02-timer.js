import flatpickr from "flatpickr";
import Notiflix from "notiflix";
import "flatpickr/dist/flatpickr.min.css";

const Refs = {
  startBtn: document.querySelector("[data-start]"),
  day: document.querySelector("[data-days]"),
  hour: document.querySelector("[data-hours]"),
  minute: document.querySelector("[data-minutes]"),
  second: document.querySelector("[data-seconds]"),
};

let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Refs.startBtn.setAttribute("disabled", "true");
      Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      Refs.startBtn.removeAttribute("disabled");
    }

    let currentTime = selectedDates[0] - options.defaultDate;
    updateTimerFace(convertMs(currentTime));

    const timer = {
      intervalId: null,
      isActive: false,

      start() {
        if (this.isActive) {
          return;
        }

        this.isActive = true;
        this.intervalId = setInterval(() => {
          currentTime -= 1000;
          updateTimerFace(convertMs(currentTime));

          if (currentTime < 1000) {
            clearInterval(this.intervalId);
            this.isActive = false;
          }
        }, 1000);
      },
    };
    Refs.startBtn.addEventListener("click", timer.start);
  },
};

flatpickr("#datetime-picker", options);

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  Refs.day.textContent = `${days}`;
  Refs.hour.textContent = `${hours}`;
  Refs.minute.textContent = `${minutes}`;
  Refs.second.textContent = `${seconds}`;
}

function convertMs(time) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(time / day));
  const hours = pad(Math.floor((time % day) / hour));
  const minutes = pad(Math.floor(((time % day) % hour) / minute));
  const seconds = pad(Math.floor((((time % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// Stylization
const styleRefs = {
  timerFace: document.querySelector(".timer"),
  fields: document.querySelector(".timer").children,
};
styleRefs.timerFace.style.display = "flex";
styleRefs.timerFace.style.gap = "30px";

for (const field of styleRefs.fields) {
  field.style.display = "flex";
  field.style.flexDirection = "column";
  field.style.alignItems = "center";
  field.firstElementChild.style.fontSize = "48px";
  field.lastElementChild.style.fontSize = "24px";
}
