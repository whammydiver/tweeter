/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  console.log("ready");

  const $tweet = createTweetElement(tweetData);

  const container = $(".tweetsContainer");
  console.log(container);
  container.append($tweet);

  
})


  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  

  const createTweetElement = function(tweetData) {
    const article = `
    <article class="tweet">
    <header class="tweetContainerHeader">
    <div class="headerLeftContent">
    <div class="headerAvatar"><img src="${tweetData.user.avatars}"></div>
    <div class="user">${tweetData.user.name}</div>
    </div>
    <div class="userHandle">${tweetData.user.handle}</div>
    </header>
    <div class="tweetText">${tweetData.content.text}</div>
    <footer class="tweetContainerFooter">
    <div class="dateStamp">${timeago.format(tweetData.created_at)}</div>
    <div class="rollOverIcons">
    <i id="flag" class="fa-solid fa-flag"></i>
    <i id="retweet" class="fa-solid fa-retweet"></i>
    <i id="heart" class="fa-solid fa-heart"></i>
    <div class="likeCounter">2</div>
    </div>
    </footer>
    </article>`
    
    return article;
  }
  


