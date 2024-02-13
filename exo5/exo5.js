const quotesWrap = document.querySelector("#quotes-wrap");

import { quotes } from "../exo5/quotes.js";

// Displaying quotes and authors
Object.keys(quotes).forEach(function (writer) {
  const citationWrap = document.createElement("div");
  quotesWrap.appendChild(citationWrap);
  const citation = document.createElement("i");
  const auteur = document.createElement("p");
  citationWrap.appendChild(citation);
  citationWrap.appendChild(auteur);

  citationWrap.classList.add("quote");
  citation.classList.add("citation");
  auteur.classList.add("auteur");

  quotes[writer].forEach(function (quoteObj) {
    const authorName = quoteObj.name;
    const quote = quoteObj.quote;
    citation.innerHTML = '"' + quote + '"';
    auteur.innerHTML = authorName;
  });
});
