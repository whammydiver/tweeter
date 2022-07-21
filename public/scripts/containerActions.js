$(document).ready(function() {

  $("article.tweet").on("mouseover", function() {
    $(this).addClass("shadow");
   });

  $("article.tweet").on("mouseout", function() {
    $(this).removeClass("shadow");
    });

  $("i.fa-solid fa-flag").on("mouseover", function() {
    $(this).addClass("redFormat");
    });

  $("i.fa-solid fa-flag").on("mouseout", function() {
    $(this).removeClass("redFormat");
    });

  $("article.fa-solid fa-heart").on("mouseover", function() {
    $(this).addClass("redFormat");
    });

  $("article.fa-solid fa-heart").on("mouseout", function() {
    $(this).removeClass("redFormat");
    });

  $("div.fa-solid fa-retweet").on("mouseover", function() {
    $(this).addClass("redFormat");
    });

  $("div.fa-solid fa-retweet").on("mouseout", function() {
    $(this).removeClass("redFormat");
    });

});