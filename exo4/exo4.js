const box = document.querySelector(".box");
const boxBg = window.getComputedStyle(box);
const cards = document.querySelectorAll(".card");

const fb = document.querySelector("#fb");
const tw = document.querySelector("#tw");
const ig = document.querySelector("#ig");

const fbIcon = document.querySelector(".fa-facebook");
const twIcon = document.querySelector(".fa-twitter");
const igIcon = document.querySelector(".fa-instagram");

var facebook = {
  card: "rgb(66, 103, 178)",
  background: "rgb(29, 161, 242)",
};

var twitter = {
  card: "rgb(29, 161, 242)",
  background: "rgb(72, 181, 248)",
};

var instagram = {
  card: "rgb(225, 48, 108)",
  background: "rgb(235, 70, 125)",
};

console.log(facebook);
console.log(twitter);
console.log(instagram);

cards.forEach((card) => {
  // We get each card individually
  card.addEventListener("click", function () {
    card.classList.toggle("change"); //Toggle a class when clicked
    const cardBg = window.getComputedStyle(card);
    if (boxBg.getPropertyValue("background-color") === "rgb(150, 150, 150)") {
      box.style.setProperty(
        "background-color",
        cardBg.getPropertyValue("background-color"),
        "important"
      );
      box.classList.add("boxBrightness");
      cards.classList.toggle("cardBrightness");
    } else {
      box.style.setProperty(
        "background-color",
        "rgb(150, 150, 150)",
        "important"
      );
      box.classList.remove("boxBrightness");
    }
  });
});

fb.addEventListener("click", function () {
  fbIcon.classList.toggle("rotate");
  const fbText = document.querySelector("#fbTxt");
  const fbTextCSS = window.getComputedStyle(fbText);
  if (fbTextCSS.getPropertyValue("opacity") === "0") {
    fbText.style.setProperty("transition", "500ms ease", "important");
    fbText.style.setProperty("transition-delay", "800ms", "important");
    fbText.style.setProperty("opacity", "1", "important");
  } else {
    fbText.style.setProperty("transition", "500ms ease", "important");
    fbText.style.setProperty("opacity", "0", "important");
  }
});

tw.addEventListener("click", function () {
  twIcon.classList.toggle("rotate");
  const twText = document.querySelector("#twTxt");
  const twTextCSS = window.getComputedStyle(twText);
  if (twTextCSS.getPropertyValue("opacity") === "0") {
    twText.style.setProperty("transition", "500ms ease", "important");
    twText.style.setProperty("transition-delay", "800ms", "important");
    twText.style.setProperty("opacity", "1", "important");
  } else {
    twText.style.setProperty("transition", "500ms ease", "important");
    twText.style.setProperty("opacity", "0", "important");
  }
});

ig.addEventListener("click", function () {
  igIcon.classList.toggle("rotate");
  const igText = document.querySelector("#igTxt");
  const igTextCSS = window.getComputedStyle(igText);
  if (igTextCSS.getPropertyValue("opacity") === "0") {
    igText.style.setProperty("transition", "500ms ease", "important");
    igText.style.setProperty("transition-delay", "800ms", "important");
    igText.style.setProperty("opacity", "1", "important");
  } else {
    igText.style.setProperty("transition", "500ms ease", "important");
    igText.style.setProperty("opacity", "0", "important");
  }
});
