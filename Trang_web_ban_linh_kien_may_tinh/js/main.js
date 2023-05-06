const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// window scroll header
window.onscroll = function () {
  let header = $(".header");
  if (window.pageYOffset > 50) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";
    header.style.padding = "0";
    header.style.zIndex = "50";
  } else {
    header.style.position = "relative";
    header.style.padding = "1rem 0";
  }
};
