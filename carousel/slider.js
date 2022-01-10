const SHOWING_CLASSNAME = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");

function slide() {
  const currentslide = document.querySelector(`.${SHOWING_CLASSNAME}`);
  if (currentslide) {
    currentslide.classList.remove(SHOWING_CLASSNAME);
    const nextSlide = currentslide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASSNAME);
    } else {
      firstSlide.classList.add(SHOWING_CLASSNAME);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASSNAME);
  }
}
slide();
setInterval(slide, 2000);
