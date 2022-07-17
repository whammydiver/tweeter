let charCount = 140;
console.log(charCount);

$(document).ready(function() {
  let counter = document.getElementById("counter");
  console.log(counter);
  const textarea = document.getElementById("tweet-text-box");
  
  const charCounter = function() {
    textarea.addEventListener("input", (event) => {
      console.log(event);
      charCount = 140 - (textarea.value.length);
      // if (event.inputType !== "deleteContentBackward") {
      //   charCount -= 1;
      // } else {
      //   charCount += 1;
      // }
      console.log(event.inputType, charCount);
      return charCount;
    });
  };
  charCounter();
});
