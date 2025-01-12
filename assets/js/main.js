/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    tab.classList.add("skills__active");
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
  // Check if clicked element is a popup open button
  if (e.target.classList.contains("open_btn")) {
    e.preventDefault();
    // Get the target popup ID from the href attribute
    const popupId = e.target.getAttribute("href");
    const popup = document.querySelector(popupId);
    if (popup) {
      popup.style.display = "block";
    }
  }

  // Check if clicked element is a popup close button
  if (e.target.classList.contains("popup__close")) {
    e.preventDefault();
    const popup = e.target.closest(".popup");
    if (popup) {
      popup.style.display = "none";
    }
  }
});
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modelBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
// Array of skills to display, each with a color class
const skills = [
  { text: "Front-end Developer", colorClass: "skill-color-1" },
  { text: "UI/UX Designer", colorClass: "skill-color-2" },
  { text: "Media Design Specialist", colorClass: "skill-color-3" },
  { text: "Creative Problem Solver", colorClass: "skill-color-4" },
  { text: "Web Developer", colorClass: "skill-color-5" },
];

const skillElement = document.getElementById("dynamic-skill");
let skillIndex = 0; // Tracks the current skill
let charIndex = 0; // Tracks the character being typed

// Function to type out the text
function typeSkill() {
  const currentSkill = skills[skillIndex];
  const textToType = currentSkill.text;

  // Typing effect logic
  if (charIndex < textToType.length) {
    skillElement.textContent += textToType[charIndex];
    skillElement.className = `typing-effect ${currentSkill.colorClass}`;
    charIndex++;
    setTimeout(typeSkill, 100); // Adjust speed of typing here
  } else {
    // Pause before erasing
    setTimeout(eraseSkill, 1500);
  }
}

// Function to erase the text
function eraseSkill() {
  if (charIndex > 0) {
    skillElement.textContent = skillElement.textContent.slice(0, -1);
    charIndex--;
    setTimeout(eraseSkill, 50); // Adjust speed of erasing here
  } else {
    // Move to the next skill and reset charIndex
    skillIndex = (skillIndex + 1) % skills.length;
    setTimeout(typeSkill, 500); // Pause before typing the next skill
  }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", () => {
  typeSkill();
});
