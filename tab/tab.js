const tabs = document.querySelectorAll("[data-tab-target]");
const tabcon = document.querySelectorAll("[data-tab-content]");
//attribute
tabs.forEach((tab) => {
  //함수
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    //??
    tabcon.forEach((tabc_all) => {
      tabc_all.classList.remove("active");
    });
    //
    target.classList.add("active");
    //item에 active 추가
  });
});
