const  SCROLL_TO_TOP_BTN = document.getElementById("scrollToTop");

const BACK_OFFSET = 500;

window.addEventListener("scroll", function()  {
  if(window.scrollY > BACK_OFFSET){
    SCROLL_TO_TOP_BTN.style.display = "block";
  }else {
    SCROLL_TO_TOP_BTN.style.display = "none"
  }
});

function scrollToTop () {
  window.scrollTo(
    {
      top: 0,
      behavior: "smooth"
    }
  );}

SCROLL_TO_TOP_BTN.addEventListener("click", scrollToTop);