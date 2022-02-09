const sidebar = document.getElementById("sidebar");
const toggle = document.querySelector(".ham-wrap");
const typing = document.querySelector(".typing");
const hamburger = document.querySelector(".ham");
const navbar = document.querySelector(".primary-navbar");
const sideWrap = document.querySelector(".side-wrapper");
const bars = document.querySelectorAll(".bar");
const form = document.querySelector(".form");
const fields = document.querySelectorAll(".form-control");

// Open sidebar
toggle.addEventListener("click", showSidebar);

function showSidebar(e) {
  sidebar.classList.toggle("show-side");
  hamburger.classList.toggle("active");
  toggle.classList.toggle("open");
}

document.addEventListener("click", (e) => {
  if (sidebar.classList.contains("show-side")) {
    if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
      sidebar.classList.remove("show-side");
      hamburger.classList.remove("active");
      toggle.classList.remove("open");
    }
  }
});

//Typing effect
const textArray = [
  "a junior front-end developer",
  "an IT student at HAMK",
  "a knowledge seeker",
];

let textArray_index = 0;
let text_index = 0;
const typingSpeed = 100;
const deleteSpeed = 50;
const waitingTime = 2000;

// function type() {
//   if (text_index < textArray[textArray_index].length) {
//     typing.textContent += textArray[textArray_index].charAt(text_index);
//     text_index++;
//     setTimeout(type, typingSpeed);
//   } else {
//     setTimeout(erase, waitingTime);
//   }
// }

// function erase() {
//   if (text_index > 0) {
//     text_index--;
//     const value = typing.textContent;
//     typing.textContent = value.slice(0, text_index);
//     setTimeout(erase, deleteSpeed);
//   } else {
//     if (textArray_index + 1 === textArray.length) {
//       textArray_index = 0;
//     } else {
//       textArray_index++;
//     }
//     setTimeout(type, 100);
//   }
// }

window.addEventListener("load", loadFunctions);

// Function that gets called when the page is loaded
function loadFunctions() {
  // type();
  calcPer();
}

// Calculate percentage
function calcPer() {
  const barArr = Array.from(bars);
  barArr.forEach((item) => {
    item.querySelectorAll("div").forEach((i) => {
      const val = i.getAttribute("data-per");
      i.style.width = val + "%";
    });
  });
}

// Scroll
window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("show-nav");
    navbar.classList.remove("py-3");
    navbar.classList.add("py-1");
    hamburger.style.top = "15px";
  } else {
    navbar.classList.remove("show-nav");
    navbar.classList.add("py-3");
    navbar.classList.remove("py-1");
    hamburger.style.top = "20px";
  }
}

// Form valitadion

form.addEventListener("submit", (e) => {
  const error = [];

  fields.forEach((field) => {
    if (field.value === "") {
      error.push("error");
      field.classList.add("is-invalid");
    } else {
      field.classList.remove("is-invalid");
    }
  });

  if (error.length > 0) {
    e.preventDefault();
  }
});
