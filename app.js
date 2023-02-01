"use strict";
let heading = document.querySelector(".h1class");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let h1 = document.querySelector('#header')
let newgame = document.querySelector('.new')

let number = 0
function increase() {
  number = number+1
   heading.innerText = number;
  
}
btn1.addEventListener("click", increase);
function increaseby2() {
  number = number+ 2
  heading.innerText = number;
}
btn2.addEventListener("click", increaseby2);
function increaseby3() {
  number = number + 3
   heading.innerText = number;
}
btn3.addEventListener("click", increaseby3);
// Guest
let varie = 0
 function increaseby4() {
  varie = varie + 1
    h1.innerText = varie; 
 }
 btn4.addEventListener('click', increaseby4)
 function increaseby5() {
  varie = varie + 2
    h1.innerText = varie; 
 }
 btn5.addEventListener('click', increaseby5)
 function increaseby6() {
  varie = varie + 3
    h1.innerText = varie; 
 }
 btn6.addEventListener('click', increaseby6)


function resetbutton() {
  varie = 0,
  number = 0
  heading.innerText = 0
  h1.innerText = 0
  // number = 0
}
newgame.addEventListener('click', resetbutton)