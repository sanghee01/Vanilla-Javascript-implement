const toggle = document.getElementById("toc-toggle");
const cont = document.getElementById("toc-content");

function openCloseToc() {
  if (cont.style.display === "block") {
    document.getElementById("toc-content").style.display = "none";
    document.getElementById("toc-toggle").textContent = "보이기";
  } else {
    document.getElementById("toc-content").style.display = "block";
    document.getElementById("toc-toggle").textContent = "숨기기";
  }
}
