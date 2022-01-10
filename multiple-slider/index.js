let slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slide li"),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 200,
  slideMargin = 30,
  moveAmt = slideWidth + slideMargin,
  maxSlides = 3,
  prevBtn = document.querySelector(".controls .prev"),
  nextvBtn = document.querySelector(".controls .next");

//복사본 생성하기
// for (let i = 0; i < maxSlides; i++) {
//   let cloneSlide = slide[i].cloneNode(true);
//   cloneSlide.classList.add("clone");
//   slides.appendChild(cloneSlide);
// }
// for (let i = slideCount - 1; i >= 0; i--) {
//   let cloneSlide = slide[i].cloneNode(true);
//   cloneSlide.classList.add("clone");
//   slides.prepend(cloneSlide);
// }

//가로 배열하기
let newslide = document.querySelectorAll("slide li");
newslide.forEach(function (item, index) {
  console.log(item, index);
  item.style.left = moveAmt * index + "px";
});

//중앙 배치하기 transform translateX(???)
/*
    ulMoveAmt
    */

let ulMoveAmt = -slide * moveAmt + "px";
slides.style.transform = "translateX(" + ulMoveAmt + ")";
slides.classList.add("animated");

// //좌우 버튼으로 이동하기
// function moveSlide(num) {
//   slides.style.left = moveAmt * -num + "px";
//   currentIdx = num;

//   if (currentIndex == slideCount || currentIdx == -slideCount) {
//     setTimeout(function () {
//       slides.classList.remove("animated");
//       slides.style.left = "0px";
//       currentIdx = 0;
//     }, 500);

//     setTimeout(function () {
//       slides.classList.add("animated");
//     }, 600);
//   }
// }

/* 자동 슬라이드 */
let timer = undefined;

function autoSlide() {
  if (timer == undefined) {
    timer = setInterval(function () {
      if (currentIdx < slideCount - 3) {
        moveSlide(currentIdx + 1);
      } else {
        moveSlide(0);
      }
    }, 3000);
  }
}
autoSlide();
function stopSlide() {
  clearInterval(timer);
  timer = undefined;
}
slides.addEventListener("mouseenter", function () {
  stopSlide();
});
slides.addEventListener("mouseleave", function () {
  autoSlide();
});
