const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour-hand"),
  minHand = document.querySelector(".min-hand"),
  secHand = document.querySelector(".sec-hand"),
  themeToggleBtn = document.querySelector("#themeToggleBtn");

if (localStorage.getItem("theme") === "light") {
  body.classList.add("lightIsActive");
  themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}
else {
  body.classList.remove("lightIsActive");
  themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
};

themeToggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    body.classList.remove("lightIsActive");
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    body.classList.add("lightIsActive");
  }
})

const updateTime = () => {
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    // minToDeg = (date.getMinutes() / 60) * 360,
    minToDeg = ((date.getMinutes() + (date.getSeconds() / 60)) / 60) * 360,
    // hourToDeg = (date.getHours() / 12) * 360;
    hourToDeg = ((date.getHours() + (date.getMinutes() / 60)) / 12) * 360;

  secHand.style.transform = `translateX(-50%) rotate(${secToDeg}deg)`;
  minHand.style.transform = `translateX(-50%) rotate(${minToDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourToDeg}deg)`;
};

window.addEventListener("load", () => {
  updateTime();
})

setInterval(() => {
  updateTime();
}, 1000);