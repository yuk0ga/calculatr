var numbox = document.getElementById("result");
var clrbtn = document.getElementById("clr");
var plumi = document.getElementById("plusminus");
var percent = document.getElementById("percent");
var divbtn = document.getElementById("divbtn");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var multibtn = document.getElementById("multibtn");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var minusbtn = document.getElementById("minusbtn");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var plusbtn = document.getElementById("plusbtn");
var zero = document.getElementById("zero");
var point = document.getElementById("point");
var equals = document.getElementById("equals");
var operator = 0;
var dot = 0;

function fontResize (){
  if (numbox.value === "0"){
    numbox.value = "";
  }
  if (numbox.value.length > 6) {
    numbox.style.fontSize = "500%";
  }
  if (numbox.value.length > 9) {
    numbox.style.fontSize = "400%";
  }
  if (numbox.value.length > 12) {
    numbox.style.fontSize = "300%";
  }
  operator = 0;
}

clrbtn.onclick = function clearall(){
    numbox.value = "0";
    operator = 0;
    dot = 0;
    numbox.style.fontSize = "700%";
  }

plumi.onclick = function plumi(){
    if(numbox.value < 0　&& operator === 0){
      numbox.value = Math.abs(numbox.value); //returns absolute value.
    }
    else if (numbox.value > 0 && operator ===0){
      numbox.value = -Math.abs(numbox.value);
    }
    else{
      return;
    }
  }

percent.onclick = function percentify(){
  if (operator === 0) {
    numbox.value/=100;
    fontResize();
  } else {
    return;
  }
}

/*
var numbers = [one, two, three, four, five, six, seven, eight, nine, zero];
switch (numbers) {
  case [0]:

}

switch (true) {
  case numbox.value.length > 7:
    numbox.style.fontSize = "600%";
    break;
  case numbox.value.length > 8:
    numbox.style.fontSize = "500%";
    break;
  case numbox.value.length > 9:
    numbox.style.fontSize = "400%";
    break;
  case numbox.value.length >10:
    numbox.style.fontSize = "250%";
    break;
}
*/

seven.onclick = function enterSeven(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 7;
  }
}

eight.onclick = function enterEight(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 8;
  }
}

nine.onclick = function enterNine(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 9;
  }
}

four.onclick = function enterFour() {
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 4;
  }
}

five.onclick = function enterFive(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 5;
  }
}

six.onclick = function enterSix(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 6;
  }
}

one.onclick = function enterOne(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 1;
  }
}

two.onclick = function enterTwo(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 2;
  }
}

three.onclick = function enterThree(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 3;
  }
}

zero.onclick = function enterZero(){
  fontResize();
  if (numbox.value.length < 18) {
    numbox.value += 0;
  }
}

point.onclick = function enterPoint(){
  fontResize();
  if (numbox.value.length < 18 && dot === 0) {
    numbox.value += ".";
    dot = 1;
  }
}

/*const equation = numbox.value;*/

divbtn.onclick = function divide(){
if (operator === 0) {
  numbox.value += "/";
  operator = 1;
  dot = 0;
}
  else {
    numbox.value = numbox.value.substring(0,numbox.value.length-1);
    numbox.value += "/";
    dot = 0;
  }
}

multibtn.onclick = function multiply(){
if (operator === 0) {
  numbox.value += "*";
  operator = 1;
  dot = 0;
}
  else {
    numbox.value = numbox.value.substring(0,numbox.value.length-1);
    numbox.value += "*";
    dot = 0;
  }
}

plusbtn.onclick = function add(){
  if (operator === 0) {
  numbox.value += "+";
  operator = 1;
  dot = 0;
}
  else {
    numbox.value = numbox.value.substring(0,numbox.value.length-1);
    numbox.value += "+";
    dot = 0;
  }
}

minusbtn.onclick = function subtract(){
  if (operator === 0) {
  numbox.value += "-";
  operator = 1;
  dot = 0;
}
  else {
    numbox.value = numbox.value.substring(0,numbox.value.length-1);
    numbox.value += "-";
    dot = 0;
  }
}

equals.onclick = function calculate(){
var answer = eval(numbox.value);
numbox.value = answer;
fontResize();
//operator = 0;
}
