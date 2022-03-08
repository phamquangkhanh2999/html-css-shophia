const mobileIcon = document.querySelector(".mobile-icon");
const mobileDropdown = document.querySelector(".mobile-dropdown");
const bars = document.querySelector("#bars");
const xmark = document.querySelector("#xmark");
let isHidden = false;

const mySlide = document.querySelectorAll(".my-slide");
const dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

const scrollTop = document.querySelector("#scrollTop");

// menu mobile
mobileIcon.onclick = function changeMenu() {
  mobileDropdown.classList.toggle("active-mobiel");
  if (!isHidden) {
    bars.style.display = "none";
    xmark.style.display = "block";
  } else {
    bars.style.display = "block";
    xmark.style.display = "none";
  }
  isHidden = !isHidden;
};

// slider
let timer = setInterval(autoSlide, 4000);
const sliderItemsWidth = mySlide[0].offsetWidth;
function autoSlide() {
  counter += 1;
  slidefun(counter);
}

function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 4000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < mySlide.length; i++) {
    mySlide[i].style.display = "none";
  }

  for (i = 0; i < mySlide.length; i++) {
    dot[i].className = dot[i].className.replace("active-dot", "");
  }

  if (n > mySlide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = mySlide.length;
  }
  mySlide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active-dot";
}

// scroll

scrollTop.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
