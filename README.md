# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Desktop](.\complete\desktop.png)
![Mobile](.\complete\mobile.png)
![Active](.\complete\active.png)

### Links

- [Solution URL](https://github.com/PhilJG/faq-accordian/tree/main/faq-accordion-card-main)
- [Live Site](https://philjg.github.io/faq-accordian-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript
- CSS animations

### What I learned

This lesson gave me a much stronger understanding how to use javascript methods like find(), filter(), forEach() & map().

That was the main goal of this project so my css layout isn`t exactly perfect on this project.
However I also added a spinning arrow animation to the all the arrows as well by just adding a .rotate class through js.

```css
.rotate {
  transform: rotate(180deg);
}
```

```js
question.forEach(function (el, i, arr) {
  el.addEventListener("click", function () {
    currentQuestion = question[i];

    if (allQuestions[i].visibility === false) {
      console.log(`Question ${i} is now true`);
      console.log(`${i} element has been pressed`);
      icon[i].classList.add("rotate");
      question[i].classList.add("bold");
      answer[i].innerHTML = allQuestions[i].answer;
      allQuestions[i].visibility = true;
    } else {
      console.log(`Question ${i} is now false`);
      console.log(`${i} element has been pressed`);
      icon[i].classList.remove("rotate");
      question[i].classList.remove("bold");
      answer[i].innerHTML = "";
      allQuestions[i].visibility = false;
    }
    arr.forEach(function (el, index) {
      if (el !== currentQuestion) {
        icon[index].classList.remove("rotate");
        question[index].classList.remove("bold");
        answer[index].innerHTML = "";
        allQuestions[index].visibility = false;
        console.log(`${index} was not clicked`);
      }
    });
  });
});
```

### Continued development

I will want to do more projects playing with array methods as they add a whole lot more capabilites to my javascript skills.
I will need to improve on my image and container positioning.
I will need a more robust workflow system when building with css

## Author

- Website - [philjgray.ca](https://www.philjgray.ca)
- Frontend Mentor - [@PhilJG](https://www.frontendmentor.io/profile/PhilJG)
