let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header-icon-berger");
let menuBtnIcon = document.querySelector(".header-icon-berger i");

menuBtn.addEventListener("click", function() {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "-24px";
    menuBtnIcon.classList = "fa fa-times";
  } else {
    menu.style.left = "-280px";
    menuBtnIcon.classList = "fa fa-bars";
  }
});
