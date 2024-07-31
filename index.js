import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

//console.log("Hello world...");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const emoji = document.querySelector("#emoji");

const expirationDate = new Date("August 22, 2024 09:00:00");
const expirationTime = expirationDate.getTime();

function display(leftDays, leftHours, leftMinutes, leftSeconds, departure) {
  days.textContent = leftDays;
  hours.textContent = leftHours;
  minutes.textContent = leftMinutes;
  seconds.textContent = leftSeconds;
  departure = 0;
  if (departure <= 0) {
    Confetti();
  }
}
function updateCountDown() {
  const nowDate = new Date();
  const nowTime = nowDate.getTime();
  const departure = expirationTime - nowTime;

  let leftDays = Math.floor(departure / (1000 * 60 * 60 * 24));
  let leftHours = Math.floor(
    (departure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let leftMinutes = Math.floor((departure % (1000 * 60 * 60)) / (1000 * 60));
  let leftSeconds = Math.floor((departure % (1000 * 60)) / 1000);

  display(leftDays, leftHours, leftMinutes, leftSeconds, departure);
}

function Confetti() {
  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🤍", "🚀"],
    confettiColors: [
      "#ff0a54",
      "#ff477e",
      "#ff7096",
      "#ff85a1",
      "#fbb1bd",
      "#f9bec7",
    ],
    confettiRadius: 6,
    confettiNumber: 150,
    emojiSize: 22,
  });
}

updateCountDown();
setInterval(updateCountDown, 1000);
