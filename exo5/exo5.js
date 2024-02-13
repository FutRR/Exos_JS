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
    const authorName = quoteObj.name;
    const quote = quoteObj.quote;
    citation.innerHTML = '"' + quote + '"';
    auteur.innerHTML = authorName;
  });

  // Favorites system

  fav.addEventListener("click", function () {
    fav.classList.toggle("fa-solid");
    fav.classList.add("fa-heart");
  });
});
