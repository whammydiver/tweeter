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
    if (data === "text=") {
      alert("tweet cannot be submitted empty!");
    } else if (data.length > 145) {
      console.log(data.length);
      alert("tweet exceeds 140 character limit");
    } else {
      jQuery.post("/tweets", data);
      location.reload(true);
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

};
  


