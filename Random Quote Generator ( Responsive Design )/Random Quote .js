function generator() {
  var quotes = {
    " — John Muir":
      "“Nature is not a place to visit. It is home.” — Gary Snyder. “The Amen of nature is always a flower.” — Oliver Wendell Holmes, Sr. “How glorious a greeting the sun gives the mountains!” ",
    " --Albert Einstein":
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "--Dipak Pal":
      "Forget not that the earth delights to feel your bare feet and the winds long to play with your hair. — ...",
    //   "“Sky above, earth below, peace within.”"
  };

  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
