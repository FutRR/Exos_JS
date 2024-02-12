const carre = document.querySelector(".carre");
const carreCSS = window.getComputedStyle(carre); // Setting a variable to get CSS properties

carre.addEventListener("click", function () {
  alert(
    // Displaying CSS properties in an alert
    "Class : " +
      carre.className +
      "\n - Background color : " +
      carreCSS.getPropertyValue("background-color") +
      "\n - Color : " +
      carreCSS.getPropertyValue("color") +
      "\n - Height : " +
      carreCSS.getPropertyValue("height") +
      "\n - Width : " +
      carreCSS.getPropertyValue("width") +
      "\n - Display : " +
      carreCSS.getPropertyValue("display") +
      "\n - Display : " +
      carreCSS.getPropertyValue("font-family") +
      " (" +
      carreCSS.getPropertyValue("font-size") +
      ")"
  );
});
