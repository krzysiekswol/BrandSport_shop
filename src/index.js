import style from "./css/index.scss";

const slider = document.querySelector(".slider");
const dotOne = document.querySelector(".one");
const dotTwo = document.querySelector(".two");
const dotThree = document.querySelector(".three");

dotOne.addEventListener("click", function () {
  if (dotOne.classList.contains("active") === false) {
    dotOne.classList.add("active");
    slider.style.backgroundImage = `url("./src/assets/img/banner1.jpg")`;
    dotTwo.classList.remove("active");
    dotThree.classList.remove("active");
  }
});
dotTwo.addEventListener("click", function () {
  if (dotTwo.classList.contains("active") === false) {
    dotTwo.classList.add("active");
    slider.style.backgroundImage = `url("./src/assets/img/banner2.jpg")`;
    dotThree.classList.remove("active");
    dotOne.classList.remove("active");
  }
});
dotThree.addEventListener("click", function () {
  if (dotThree.classList.contains("active") === false) {
    dotThree.classList.add("active");
    slider.style.backgroundImage = `url("./src/assets/img/banner3.jpg")`;
    dotTwo.classList.remove("active");
    dotOne.classList.remove("active");
  }
});

// automaticSlider
let i = 1;
const automaticSlider = () => {
  slider.style.backgroundImage = `url('./src/assets/img/banner${i}.jpg')`;
  if (i === 1) {
    dotThree.classList.remove("active");
    dotTwo.classList.remove("active");
    dotOne.classList.add("active");
  } else if (i === 2) {
    dotOne.classList.remove("active");
    dotThree.classList.remove("active");
    dotTwo.classList.add("active");
  } else {
    dotTwo.classList.remove("active");
    dotOne.classList.remove("active");
    dotThree.classList.add("active");
    i = 0;
  }
  i++;
};
setInterval(automaticSlider, 4000);

// modal
const promoBoxes = document.querySelectorAll(".promoBox__item");
console.log(promoBoxes);

promoBoxes.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".modal").classList.add("modal__active");
  });
});

const closeModal = document.querySelector(".modal--cancel");
closeModal.addEventListener("click", function () {
  document.querySelector(".modal__active").classList.remove("modal__active");
});
