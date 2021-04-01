import style from "./css/index.scss";

const slider = document.querySelector(".slider");
const dotOne = document.querySelector(".one");
const dotTwo = document.querySelector(".two");
const dotThree = document.querySelector(".three");

dotOne.addEventListener("click", function () {
  if (dotOne.classList.contains("active")) {
    slider.style.backgroundImage = `url("/src/assets/nike_slider.jpg")`;
  } else {
    dotOne.classList.add("active");
  }
});
dotTwo.addEventListener("click", function () {
  if (dotTwo.classList.contains("active")) {
    slider.style.backgroundImage = `url("/src/assets/nike_slider.jpg")`;
    dotTwo.style.backgroundColor = `red`;
  } else {
    dotTwo.classList.add("active");
    slider.style.backgroundImage = `url("/src/assets/nike_slider.jpg")`;
  }
});
