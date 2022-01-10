const slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  slideCount = slide.length,
  slideWidth = 200,
  slideMargin = 30,
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");

let currentIdx = 0; //현재 위치

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + "px"; //슬라이드 너비를 정해줘야해

function moveSlide(num) {
  //클릭할때 슬라이드 전체를 왼쪽으로 이동시켜줌(즉, 실제로는 오른쪽으로 이동하는 것처럼 보임)
  slides.style.left = -num * (slideWidth + slideMargin) + "px";
  currentIdx = num; //이동시키고 현재인덱스는 이동한 num으로 지정
}

nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 3) {
    moveSlide(currentIdx + 1);
  } else {
    moveSlide(0);
    //마지막 슬라이드에서 더 가면 첫번째 슬라이드로 이동
  }
});
prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 3);
    //첫번째 슬라이드에서 더 가면 마지막 슬라이드로 이동
  }
});

//자동슬라이드
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
