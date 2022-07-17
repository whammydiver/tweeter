/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  const tweetContainer = document.getElementById("tweetContainer");

  tweetContainer.addEventListener("mouseover", () => {
    tweetContainer.classList.add("shadow");
  });

  tweetContainer.addEventListener("mouseout", () => {
    tweetContainer.classList.remove("shadow"); 
  })
});
