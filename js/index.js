var colors = ["#efbb4a", "#d85a56", "#96ceb4", "#5cb85c", "#00a0b0"];

function getQuote() {
    $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
    headers: {
      "X-Mashape-Key": "yJWv7QAfhxmshI4rwB1eK1FIVPRyp1TDp7BjsnlQ8uzZ1gcYv0",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function(data) { 
      console.log(data);
      currentQuote = data.quote;
      $(".quote").animate({opacity: 0}, 500, function() {
        $(this).animate({opacity: 1}, 500);
        $("#text").text(data.quote);
      });
      
      $(".quote-author").animate({opacity: 0}, 500, function() {
        $(this).animate({opacity: 1}, 500);
        $("#author").text(data.author);
      });
      
    
      var setColor = Math.floor(Math.random() * colors.length);
      $("html body").animate({
       backgroundColor: colors[setColor],
       color: colors[setColor]
      }, 1000);
      $(".button").animate({
       backgroundColor: colors[setColor],
      }, 1000);
   },
  });
};

$(document).ready(function() {
  getQuote();
  $("#new-quote").on("click", getQuote);
});
