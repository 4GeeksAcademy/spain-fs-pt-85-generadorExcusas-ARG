/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var who = ["The dog", "My grandma", "The mailman", "My bird"];
var action = ["ate", "peed", "crushed", "broke"];
var what = ["my homework", "my phone", "the car"];
var when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
var excusa = document.getElementById("excusa");

function randomElement(myArr) {
  return myArr[Math.floor(Math.random() * myArr.length)];
}
window.onload = function() {
  let quien = randomElement(who);
  let accion = randomElement(action);
  let que = randomElement(what);
  let cuando = randomElement(when);
  excusa.innerHTML += `<h1>${quien} ${accion} ${que} ${cuando}.</h1>`;
};
