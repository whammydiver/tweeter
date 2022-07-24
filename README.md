# Welcome to Tweeter

Welcome to Tweeter, a twitter emulator to run locally. The collection of code files contained in this repository were written for educational purposes as part of a project for Lighthouse Labs. 

The client.js and composer-char-counter.js files include javascript code to drive behaviours of certain HTML elements in the application. The .css files manage the overall layout. The HTML is quite basic and intended to have been manipulated by the .js and .css files primarily. 

The Tweeter app includes examples of dynamically generated content, jQuery event management and web page interactive controls. The app, of course, permits users to enter text and a helper server app creates content for many missing elements such as avatars, user handles and names, and pre-pends each tweet into a container for a reverse-chronology presentation of tweets. Warnings are created if there is no content entered when submission is attempted, or if the character count of the tweet exceeds 140. 

interactive elements of the page include the text box itself, the submission button, the character counter (which counts down from 240 and turns red when it hits -1), a collapsible tweet container, a "return to top of page" button that appears only when the page is not already at top and disappears when the page resets to origin, and rollover colour changes for the tweet box itself, and the icons within it. The page also dynamically renders, in landscape when the screen resolution exceeds 1024 pixels wide and in portrait when it doesn't.

### Landscape Layout
![landscape image](/public/images/Tweeter1.png)

### Portrait Layout
![portrait image](/public/images/Tweeter2.png)

## Demo Video

Here's a few of the elements in action:

[![demo video](/public/images/Tweeter3.png)](https://www.dropbox.com/s/8lnup82f9o0r18f/Screen%20Recording%202022-07-23%20at%207.42.54%20PM.mov?dl=0)

Enjoy fooling around!

## Dependencies

- Express
- Node 5.10.x or above
- "body-parser": "^1.15.2",
- "chance": "^1.0.2",
- "express": "^4.18.1",
- "md5": "^2.1.0"

