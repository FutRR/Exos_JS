const carreSpe = document.querySelector("#carreSpe");
const carreSpeCSS = window.getComputedStyle(carreSpe);

carreSpe.innerHTML = carreSpeCSS.getPropertyValue("background-color"); // displaying current bg-color in the element

const carres = document.querySelectorAll(".carre");
carres.forEach((carre) => {
  // foreach loop to get individual divs
  carre.addEventListener("click", function () {
    const carreColor = window.getComputedStyle(carre); //giving a const divs background color
    carreSpe.style.setProperty(
      "background-color",
      carreColor.getPropertyValue("background-color"), // setting said bg color to the element
      "important"
    );
    carreSpe.innerHTML = carreSpeCSS.getPropertyValue("background-color");
  });
});
