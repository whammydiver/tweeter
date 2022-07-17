/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  const tweetContainer = document.getElementById("tweetContainer");
  const heart = document.getElementById("heart");
  const flag = document.getElementById("flag");
  const retweet = document.getElementById("retweet");

  tweetContainer.addEventListener("mouseover", () => {
    tweetContainer.classList.add("shadow");
  });

  tweetContainer.addEventListener("mouseout", () => {
    tweetContainer.classList.remove("shadow"); 
  })

  heart.addEventListener("mouseover", () => {
    heart.classList.add("redFormat");
  });

  heart.addEventListener("mouseout", () => {
    heart.classList.remove("redFormat"); 
  })

  flag.addEventListener("mouseover", () => {
    flag.classList.add("redFormat");
  });

  flag.addEventListener("mouseout", () => {
    flag.classList.remove("redFormat"); 
  })

  retweet.addEventListener("mouseover", () => {
    retweet.classList.add("redFormat");
  });

  retweet.addEventListener("mouseout", () => {
    retweet.classList.remove("redFormat"); 
  })









});
