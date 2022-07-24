
$(document).ready(function() {
  
  textCountdown();
  
});

// manages text counter
const textCountdown = function() {
  $("#tweet-text-box").on("input", function() {
    const charCount = 140 - $(this).val().length;
    const counter = $(this).siblings(".submitCount").children(".counter");
    counter.text(charCount);
    if (charCount < 0) {
      counter.addClass("redFormat");
    } else {
      counter.removeClass("redFormat");
    }
  });
};