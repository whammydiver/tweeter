$(document).ready(function() {

  const loadTweets = function() {
    $.ajax("/tweets", {method: "Get"})
      .then(data =>{
        renderTweets(data);
      })
  }
  $("#newTweet").submit(function(event) {
    event.preventDefault();
    const data = ($("textarea").serialize());
    if ($("textarea").val().length === 0) {
      alert("tweet cannot be submitted empty!");
    } else if ($("textarea").val().length > 140) {
      alert("tweet exceeds 140 character limit");
    } else {
      jQuery.post("/tweets", data);
      location.reload();
    };
  })
  loadTweets();
});

const renderTweets = function(tweets) {
  const container = $(".tweetsContainer");
  for (let tweet of tweets) {
    let renderedTweet = createTweetElement(tweet);
    container.append(renderedTweet);
  };
};

const textMaker = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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
      <div class="tweetText">${textMaker(tweetData.content.text)}</div>
      <footer class="tweetContainerFooter">
        <div class="dateStamp">${timeago.format(tweetData.created_at)}</div>
          <div class="rollOverIcons">
            <i id="flag" class="fa-solid fa-flag"></i>
            <i id="retweet" class="fa-solid fa-retweet"></i>
            <i id="heart" class="fa-solid fa-heart"></i>
          <div class="likeCounter"></div>
        </div>
      </footer>
    </article>`
  
  return article;

};
  


