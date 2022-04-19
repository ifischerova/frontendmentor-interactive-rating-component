# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [GitHub repository](https://github.com/Ivuska/frontendmentor-interactive-rating-component)
- Live Site URL: [Live solution on GitHub pages](https://ivuska.github.io/frontendmentor-interactive-rating-component/#)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- Flexbox
- SASS
- pure JS
- Mobile-first workflow

### What I learned

I few new things in JS: 
- I spent a really big amount of time to persuade the "thank you card" to be shown after click on submit button but on the other hand I am quite sure that I will remember the solution and consequences for my next projects quite well ==> be aware of what is returned (only one element vs object vs collection of elements!?)
- `innerHTML` gets the text from some HTML element, `outerHTML` gets the text from the tags itself.
- if I want to get 
- do NOT use dot when giving the class name in `document.getElementsByClassName()` ! :-D 

CSS:
- linear-gradient CANNOT be used as the `background-color` -> it needs to be used as `background-image`!!
- it is really not easy to create a perfect circle of the text is in it. 
  I defined it by using these five properties (height; width; line-height; text-align; border-radius) but I am not sure how "elegant" this solution is.

Lighthouse audit:
- cannot be applied on only HTML file opened in the browser. To avoid the deployment and if you have python installed you can run command (WIN) `python -m http.server` when you are in the folder with the proper project -> the command will start some local server. Go to the `localhost:[port-given-by-the-command]` in the browser and the current project should be visible and you can run the audit. To stop the serve just run `Ctrl+C`. 

### Continued development

This is v1 solution. I plan to try to re-structure the big SASS file into more small "more global" files that could be useful in the future projects together with implementing the feedback from the community.

## Author
- Frontend Mentor - [@Ivuska](https://www.frontendmentor.io/profile/Ivuska)
