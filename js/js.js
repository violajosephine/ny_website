document.querySelector(".navbar-toggler").addEventListener("click", shadow);

function shadow() {
  document.querySelector("nav").classList.toggle("nav-shadow");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".logo2").style.fontSize = "2rem";
    document.querySelector(".logo1").style.fontSize = "2rem";
  } else {
    document.querySelector(".logo2").style.fontSize = "";
    document.querySelector(".logo1").style.fontSize = "";
  }
}
