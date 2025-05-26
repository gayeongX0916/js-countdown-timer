const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function updateTimer() {
  const future = new Date("2026-01-01T00:00:00");
  const today = new Date();
  const diff = future - today;

  const totalSeconds = Math.floor(diff / 1000);
  const d = Math.floor(totalSeconds / (3600 * 24));
  const h = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  animateFlip(days, d);
  animateFlip(hours, h.toString().padStart(2, "0"));
  animateFlip(minutes, m.toString().padStart(2, "0"));
  animateFlip(seconds, s.toString().padStart(2, "0"));

  if (diff <= 0) {
    days.textContent = 0;
    hours.textContent = 0;
    minutes.textContent = 0;
    seconds.textContent = 0;
    clearInterval(timer);
    return;
  }
}

updateTimer();

const timer = setInterval(updateTimer, 1000);

function animateFlip(el, newValue) {
  if (el.textContent !== newValue.toString()) {
    el.textContent = newValue;
    el.classList.add("flip");
    setTimeout(() => el.classList.remove("flip"), 400);
  }
}
