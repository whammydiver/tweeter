let charCount = 140;

$(document).ready(function() {
  let counter = document.getElementById("counter");
  const textarea = document.getElementById("tweet-text-box");
  
  const charCounter = function() {
    textarea.addEventListener("input", (event) => {
      charCount = 140 - (textarea.value.length);
      counter.innerHTML = charCount;
      if (charCount < 0) {
        counter.classList.add("redFormat");
      } else {
        counter.classList.remove("redFormat");
      }
    });
  };
  charCounter();
});
