// Associating html containers to constants
const box = document.querySelector(".box");
const boxBg = window.getComputedStyle(box);
const cards = document.querySelectorAll(".card");

// Associating html cards to constants
const fb = document.querySelector("#fb");
const tw = document.querySelector("#tw");
const ig = document.querySelector("#ig");

// Associating html icons to constants
const fbIcon = document.querySelector(".fa-facebook");
const twIcon = document.querySelector(".fa-twitter");
const igIcon = document.querySelector(".fa-instagram");

cards.forEach((card) => {
  // Each card getting treated individually

  card.addEventListener("click", function () {
    card.classList.toggle("change"); // We add and remove a class to said card when it gets clicked
  });
});

// Associative array / Object literal to contain css properties fro each element
var facebook = {
  card: "rgb(66, 103, 178)",
  background: "rgb(81, 111, 170)",
};

var twitter = {
  card: "rgb(29, 161, 242)",
  background: "rgb(72, 181, 248)",
};

var instagram = {
  card: "rgb(225, 48, 108)",
  background: "rgb(235, 70, 125)",
};

console.log(facebook.background);
console.log(twitter);
console.log(instagram);

// FACEBOOK
fb.addEventListener("click", function () {
  fbIcon.classList.toggle("rotate"); // Icon gets a new class with rotating properties when card get clicked

  // Changing background color back and forth
  if (boxBg.getPropertyValue("background-color") === "rgb(150, 150, 150)") {
    box.style.setProperty("background-color", facebook.background, "important");
  } else {
    box.style.setProperty(
      "background-color",
      "rgb(150, 150, 150)",
      "important"
    );
  }

  const fbText = document.querySelector("#fbTxt");
  const fbTextCSS = window.getComputedStyle(fbText);

  // Changing text opacity on delay
  if (fbTextCSS.getPropertyValue("opacity") === "0") {
    fbText.style.setProperty("transition", "500ms ease", "important");
    fbText.style.setProperty("transition-delay", "800ms", "important");
    fbText.style.setProperty("opacity", "1", "important");
  } else {
    fbText.style.setProperty("transition", "500ms ease", "important");
    fbText.style.setProperty("opacity", "0", "important");
  }
});

// TWITTER
tw.addEventListener("click", function () {
  twIcon.classList.toggle("rotate");

  // Changing background color back and forth
  if (boxBg.getPropertyValue("background-color") === "rgb(150, 150, 150)") {
    box.style.setProperty("background-color", twitter.background, "important");
  } else {
    box.style.setProperty(
      "background-color",
      "rgb(150, 150, 150)",
      "important"
    );
  }

  const twText = document.querySelector("#twTxt");
  const twTextCSS = window.getComputedStyle(twText);

  // Changing text opacity on delay
  if (twTextCSS.getPropertyValue("opacity") === "0") {
    twText.style.setProperty("transition", "500ms ease", "important");
    twText.style.setProperty("transition-delay", "800ms", "important");
    twText.style.setProperty("opacity", "1", "important");
  } else {
    twText.style.setProperty("transition", "500ms ease", "important");
    twText.style.setProperty("opacity", "0", "important");
  }
});

// INSTAGRAM
ig.addEventListener("click", function () {
  igIcon.classList.toggle("rotate");

  // Changing background color back and forth
  if (boxBg.getPropertyValue("background-color") === "rgb(150, 150, 150)") {
    box.style.setProperty(
      "background-color",
      instagram.background,
      "important"
    );
  } else {
    box.style.setProperty(
      "background-color",
      "rgb(150, 150, 150)",
      "important"
    );
  }

  const igText = document.querySelector("#igTxt");
  const igTextCSS = window.getComputedStyle(igText);

  // Changing text opacity on delay
  if (igTextCSS.getPropertyValue("opacity") === "0") {
    igText.style.setProperty("transition", "500ms ease", "important");
    igText.style.setProperty("transition-delay", "800ms", "important");
    igText.style.setProperty("opacity", "1", "important");
  } else {
    igText.style.setProperty("transition", "500ms ease", "important");
    igText.style.setProperty("opacity", "0", "important");
  }
});
