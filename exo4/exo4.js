const box = document.querySelector(".box");
const boxBg = window.getComputedStyle(box);
const cards = document.querySelectorAll(".card");
const icons = document.querySelectorAll(".card > i");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("change");
    const cardBg = window.getComputedStyle(card);
    if (boxBg.getPropertyValue("background-color") === "rgb(150, 150, 150)") {
      box.style.setProperty(
        "background-color",
        cardBg.getPropertyValue("background-color"),
        "important"
      );
    } else {
      box.style.setProperty(
        "background-color",
        "rgb(150, 150, 150)",
        "important"
      );
    }
    console.log(icons);

    icons.forEach((icon) => {
      icon.classList.toggle("rotate");
    });
  });
});
