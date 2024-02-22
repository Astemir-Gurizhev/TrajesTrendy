const bur = document.querySelector(".bur");
const headerList = document.querySelector(".headerList");
const body = document.querySelector("body");
const headerListLink = document.querySelectorAll(".headerListLink");
bur.addEventListener("click", () => {
  headerList.classList.toggle("active");
  body.classList.toggle("active");
  bur.classList.toggle("active");
});

headerListLink.forEach(el => {
  el.addEventListener("click", () => {
    body.classList.remove("active");
    headerList.classList.remove("active");
    bur.classList.remove("active");
  });
});
