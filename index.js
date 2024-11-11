var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    author: "― Marilyn Monroe",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "― Mae West",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "― Andre Gide",
  },
];
function showQuotes() {
    var num= Math.floor(Math.random() * quotes.length);
document.getElementById("quote").innerHTML=quotes[num].quote
document.getElementById("quoteAuthor").innerHTML=quotes[num].author
}

