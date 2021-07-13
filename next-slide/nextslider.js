const firstSlide = document.querySelector(".slider__item:first-child");
const lastSlide = document.querySelector(".slider__item:last-child");
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");

const SHOWING_CLASSNAME = "showing";
const currentslide = document.querySelector(`.${SHOWING_CLASSNAME}`);

function nextSlide() {
  currentslide.classList.remove(SHOWING_CLASSNAME);
  const next = currentslide.nextElementSibling;
  if (next) {
    next.classList.add(SHOWING_CLASSNAME);
  } else {
    firstSlide.classList.add(SHOWING_CLASSNAME);
  }
}

function backSlide() {
  currentslide.classList.remove(SHOWING_CLASSNAME);
  const back = currentslide.previousElementSibling;
  if (back) {
    back.classList.add(SHOWING_CLASSNAME);
  } else {
    lastSlide.classList.add(SHOWING_CLASSNAME);
  }
}

nextBtn.addEventListener("click", nextSlide);
backBtn.addEventListener("click", backSlide);
