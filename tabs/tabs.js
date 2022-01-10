/*
tab-content 안의 div들 모두 안보이도록 한다.

링크를 클릭하면 클릭한 그 요소의 href속성의 값을 변수 tabTarget에 저장
저장된 값에서 #을 삭제한다
tabTarget = tabs-1

document.getElementById(tabs-1).style.display="block"
=> 클릭을해서 그 요소를 보이도록 하는 함수를 만들거다
*/

const targetLink = document.querySelectorAll(".tab-menu a");
const tabContent = document.querySelectorAll("#tab-content > div");

// a 태그들마다 할 일
for (let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function (e) {
    e.preventDefault(); //링크의 기본 속성 막음
    const orgTarget = e.target.getAttribute("href"); // href라는 속성 안에있는 값을 가져와야함
    const tabTarget = orgTarget.replace("#", ""); // #을 없애줌

    for (let x = 0; x < tabContent.length; x++) {
      tabContent[x].style.display = "none"; //모든 내용들 안보이게 함
    }
    document.getElementById(tabTarget).style.display = "block"; //근데 클릭한 타겟은 보이도록 함

    for (let j = 0; j < targetLink.length; j++) {
      targetLink[j].classList.remove("active"); //모든 탭(링크)들 안보이게 함
    }
    e.target.classList.add("active"); //근데 클릭한 애는 보이도록 함
  });
}

document.getElementById("tabs-1").style.display = "block"; // 맨 처음에 탭1은 보이도록 함
