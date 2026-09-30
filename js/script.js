

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    source: "Steve Jobs",
    citation: "Stanford Commencement Address",
    year: 2005,
    tags: ["inspiration", "work"]
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    citation: "Beautiful Boy",
    year: 1980,
    tags: ["life", "wisdom"]
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    tags: ["dreams", "inspiration"]
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    source: "Albert Einstein",
    year: 1955,
    tags: ["motivation"]
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    citation: "Attributed",
    tags: ["humor", "identity"]
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill",
    year: 1941
  }
];

/***
 * `getRandomQuote` function
 * Returns a random quote object from the quotes array.
***/

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/***
 * `randomBackgroundColor` function
 * Updates the page background to a random color.
***/

function randomBackgroundColor() {
  const red = Math.floor(Math.random() * 200);
  const green = Math.floor(Math.random() * 200);
  const blue = Math.floor(Math.random() * 200);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

/***
 * `printQuote` function
 * Prints a random quote to the page and changes the background color.
***/

function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>`;
  html += `<p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.tags) {
    html += `<span class="tags">${randomQuote.tags.join(", ")}</span>`;
  }

  html += `</p>`;

  document.getElementById("quote-box").innerHTML = html;
  randomBackgroundColor();
}

/***
 * Auto-refresh quotes at a regular interval (15 seconds).
***/

function autoRefreshQuotes() {
  setInterval(printQuote, 15000);
}

autoRefreshQuotes();
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
