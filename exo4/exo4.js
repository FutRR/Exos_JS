const box = document.querySelector(".box");
const boxBg = window.getComputedStyle(box);
const cards = document.querySelectorAll(".card");
const icons = document.querySelectorAll(".card > i");

const fb = document.querySelector("#fb");
const tw = document.querySelector("#tw");
const ig = document.querySelector("#ig");

const fbIcon = document.querySelector(".fa-facebook");
const twIcon = document.querySelector(".fa-twitter");
const igIcon = document.querySelector(".fa-instagram");

fb.addEventListener("click", function () {
  fbIcon.classList.toggle("rotate");
  fb.classList.toggle("change");
  const fbBg = window.getComputedStyle(fb);
  if (boxBg.getPropertyValue("background-color") === "rgb(150, 150, 150)") {
    box.style.setProperty(
      "background-color",
      fbBg.getPropertyValue("background-color"),
      "important"
    );
  } else {
    box.style.setProperty(
      "background-color",
      "rgb(150, 150, 150)",
      "important"
    );
  }
  fbText = document.querySelector("p");
  fbText.style.display = "inline-block";
});

tw.addEventListener("click", function () {
  twIcon.classList.toggle("rotate");
  tw.classList.toggle("change");
  const twBg = window.getComputedStyle(tw);
  if (boxBg.getPropertyValue("background-color") === "rgb(150, 150, 150)") {
    box.style.setProperty(
      "background-color",
      twBg.getPropertyValue("background-color"),
      "important"
    );
  } else {
    box.style.setProperty(
      "background-color",
      "rgb(150, 150, 150)",
      "important"
    );
  }
});

ig.addEventListener("click", function () {
  igIcon.classList.toggle("rotate");
  ig.classList.toggle("change");
  const igBg = window.getComputedStyle(ig);
  if (boxBg.getPropertyValue("background-color") === "rgb(150, 150, 150)") {
    box.style.setProperty(
      "background-color",
      igBg.getPropertyValue("background-color"),
      "important"
    );
  } else {
    box.style.setProperty(
      "background-color",
      "rgb(150, 150, 150)",
      "important"
    );
  }
});
