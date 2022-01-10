const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".study-card__joinBtn");
const overlay = document.querySelector(".modal__overlay");
const closeBtn = document.querySelector("button");

const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openBtn.addEventListener("click", openModal);
