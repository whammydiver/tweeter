$(document).ready(function() {
  
  loadTweets();
  
  tweetSlider();
  
  newTweet();
  
  $(".errorMessage").hide();

  $("#top").hide();

  returnButton();

});

const loadTweets = () => {
  $.get("/tweets")
    .then(data => {
      renderTweets(data);
    });
};

const alerts = function(str) {
  $(".errorMessage").html(str);
  $(".errorMessage").show();
};

const renderTweets = function(tweets) {
  const container = $(".tweetsContainer")
    for (let tweet of tweets) {
    let renderedTweet = createTweetElement(tweet);
    container.prepend(renderedTweet);
  };
};

const safeTextMaker = function (str) {
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
      <div class="tweetText">${safeTextMaker(tweetData.content.text)}</div>
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
  
const tweetSlider = function() {
  $(".fa-angles-down").on("click", function() {
    if ($(".new-tweet").is(":hidden")) {
      $(".new-tweet").slideDown("fast");
    } else {
      $(".new-tweet").slideUp("fast");
    }
  });
};

const newTweet = function() {
  $("#newTweet").on("submit", function(event) {
    event.preventDefault();
    const data = ($("textarea").serialize());
    if ($("textarea").val().length === 0) {
      alerts("You cannot submit a blank tweet. Please enter some text before tweeting.");
    } else if ($("textarea").val().length > 140) {
      alerts("Tweet exceeds the 140 character limit, as evidenced by the character counter. Try again, more succinctly.");
    } else {
      $.post("/tweets", data)
      .then(() => {
        loadTweets();
      })
      location.reload();
    };
  })
}

const returnButton = function() {
  $(window).scroll(() => {
    if (window.scrollY > 0) {
      $("#top").show();
    } else {
      $("#top").hide();
    }
  });
  $("#top").on("click", () => {
    $("html, body").animate({scrollTop: 0}, "fast");
  })
};

