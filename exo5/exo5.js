const quotesWrap = document.querySelector("#quotes-wrap");

import { quotes } from "../exo5/quotes.js";

// Displaying quotes and authors
Object.keys(quotes).forEach(function (writer) {
  const citationWrap = document.createElement("div");
  quotesWrap.appendChild(citationWrap);
  const citation = document.createElement("i");
  const fav = document.createElement("i");
  const auteur = document.createElement("p");
  citationWrap.appendChild(citation);
  citationWrap.appendChild(fav);
  citationWrap.appendChild(auteur);

  citationWrap.classList.add("quote");
  citation.classList.add("citation");
  fav.classList.add("fa-regular");
  fav.classList.add("fa-heart");
  auteur.classList.add("auteur");

  quotes[writer].forEach(function (quoteObj) {
    const quoteKey = `${writer}_${quoteObj.name}_${quoteObj.quote}`;
    citation.innerHTML = '"' + quoteObj.quote + '"';
    auteur.innerHTML = quoteObj.name;

    // Favorites system

    document.addEventListener("DOMContentLoaded", function () {
      // Retrieve the current state from localStorage
      const isFav = localStorage.getItem(quoteKey) === "true";

      // Set initial class based on localStorage state
      if (isFav) {
        fav.classList.add("fa-solid");
      }

      // Add click event listener to toggle classes and update localStorage
      fav.addEventListener("click", function () {
        // Toggle the classes
        fav.classList.toggle("fa-solid");

        // Update the state in localStorage
        localStorage.setItem(quoteKey, fav.classList.contains("fa-solid"));
      });
    });
  });
});
