import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

//console.log("Hello world...");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
let leftDays, leftHours, leftMinutes, leftSeconds;

figureTest.addEventListener("touchstart", function (e) {
  e.preventDefault();
  document.getElementById("figure-1").style.opacity = 1;
  document.getElementById("figcap-1").style.opacity = 1;
});

figureTest.addEventListener("touchend", function (e) {
  e.preventDefault();
  document.getElementById("figure-1").style.opacity = 0;
  document.getElementById("figcap-1").style.opacity = 0;
});

const expirationDate = new Date("August 22, 2024 09:00:00");
const expirationTime = expirationDate.getTime();

function display() {
  days.textContent = leftDays;
  hours.textContent = leftHours;
  minutes.textContent = leftMinutes;
  seconds.textContent = leftSeconds;
}

function updateCountDown() {
  const nowDate = new Date();
  const nowTime = nowDate.getTime();
  const departure = expirationTime - nowTime;

  leftDays = Math.floor(departure / (1000 * 60 * 60 * 24));
  leftHours = Math.floor(
    (departure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  leftMinutes = Math.floor((departure % (1000 * 60 * 60)) / (1000 * 60));
  leftSeconds = Math.floor((departure % (1000 * 60)) / 1000);
  display();
}

function confetti() {
  if (
    leftDays === 0 &&
    leftHours === 0 &&
    leftMinutes === 0 &&
    leftSeconds === 0
  ) {
    jsConfetti.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🤍", "🚀"],
      confettiRadius: 6,
      confettiNumber: 300,
      emojiSize: 22,
    });
  }
}

updateCountDown();
setInterval(updateCountDown, 1000);
window.onload = function () {
  setTimeout(() => {
    confetti();
  }, 2000);
};

const elements = document.querySelectorAll(".hover-effect");

elements.forEach((element) => {
  // Add touchstart event listener
  element.addEventListener("touchstart", () => {
    console.log("test1");
    element.classList.add("touch-hover-effect");
  });

  element.addEventListener("touchend", () => {
    // Remove touch effect
    console.log("test2");
    element.classList.remove("touch-hover-effect");
  });
});
