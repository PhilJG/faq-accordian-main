"use strict mode";

//On click >
// if A is hidden move to getAnswer
// if A is visibile move to hideAnswer

//getAnswer
//1.child A is no longer hidden
//2.Q becomes bold
//3.arrow icon turns up
//4.hideAnswer on all other questions

//hideAnswer
//1.child A is hidden
//2.Q is no longer bold
//3.arrow icon turns down

const question0 = {
  answer:
    "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  visibility: false,
};

const question1 = {
  answer:
    "No more than 2GB. All files in your account must fit your allotted storage space.",
  visibility: false,
};
const question2 = {
  answer:
    "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  visibility: false,
};
const question3 = {
  answer:
    "Yes! Send us a message and we’ll process your request no questions asked.",
  visibility: false,
};
const question4 = {
  answer:
    "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  visibility: false,
};

const allQuestions = [question0, question1, question2, question3, question4];

const questionTab = document.querySelector(".tab");
const question = document.querySelectorAll(".question__tab");
const answer = document.querySelectorAll(".answer");
const visible = document.querySelector(".bold");
const hidden = document.querySelector(".hidden");
const icon = document.querySelectorAll(".icon");

let currentQuestion;

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

// question.forEach(function (el, i) {
//   el.addEventListener("click", function () {
//     let otherQuestions;
//     let currentQuestion;
//     if (allQuestions[i].visibility === false) {
//       console.log(`Question ${i} is now true`);
//       console.log(`${i} element has been pressed`);
//       console.log(allQuestions);
//       currentQuestion = allQuestions[i];
//       icon[i].classList.add("rotate");
//       question[i].classList.add("bold");
//       answer[i].innerHTML = allQuestions[i].answer;
//       currentQuestion.visibility = true;
//     } else if (allQuestions[i].visibility === true) {
//       console.log(`Question ${i} is now false`);
//       console.log(`${i} element has been pressed`);
//       icon[i].classList.remove("rotate");
//       question[i].classList.remove("bold");
//       answer[i].innerHTML = "";
//       allQuestions[i].visibility = false;
//     }
//   });
// });
//     otherQuestions = allQuestions.filter(function (value) {
//       return value !== currentQuestion;
//     });
//     console.log(otherQuestions);
//     // icon[index].classList.remove("rotate");
//     // question[index].classList.remove("bold");
//     // answer[index].innerHTML = "";
//   });
// });

// var items = [1, 2, 3, 4, 5, 6];
// var current = 2;

// var itemsWithoutCurrent = items.filter(function (x) {
//   return x !== current;
// });

// console.log(itemsWithoutCurrent);

// question.addEventListener('click', function(
//   if(question--1 === false){
//     console.log('false');
//   }
// });

// Eventlistener directly in the DOM
// document.addEventListener("click", function (el) {
//   console.log(el, typeof el);
//   for (const [key, value] of Object.entries(el)) {
//     console.log(`${key} ${value}`);
//   }
// });

//Eventlistener directly in the DOM
// document.addEventListener("click", function (el) {
//   console.log(el, typeof el);
//   for (const [key, value] of Object.entries(el)) {
//     console.log(`${key} ${value}`);
//   }

// answer.forEach(function (el, i) {
//   el.addEventListener("click", function (el) {
//     console.log(`${i} element has been closed`);
//     answer[i].classList.add("hidden");
//     icon[i].classList.remove("rotate");
//     question[i].classList.remove("bold");
//   });
// });

// question.addEventListner("click", function (el) {
//   answer[el].classList.remove("hidden");
//   question[el].classList.add("bold");
//   icon[el].classList.add("rotate");
// });
// function getAnswer(el, i) {

//   answer[i].classList.remove("hidden");
//   question[i].classList.add("bold");
//   icon[i].classList.add("rotate");
// };

// question.forEach((el, i, arr) => {
//   el.addEventListner("click", function () {
//     answer[el].classList.remove("hidden");
//     question[el].classList.add("bold");
//     icon[el].classList.add("rotate");
//     console.log(el, i, arr);
//   });
// });

// for (i = 0; i < question.length; i++) {
//   question[i].addEventListener("click", getAnswer);
//   console.log(i, typeof i);
// }
