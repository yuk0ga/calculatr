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
  if (numbox.value.length > 6) {
    numbox.style.fontSize = "500%";
  }
  if (numbox.value.length > 9) {
    numbox.style.fontSize = "400%";
  }
  if (numbox.value.length > 12) {
    numbox.style.fontSize = "300%";
  }
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

point.onclick = function enterPoint(){
  fontResize();
  if (numbox.value.length < 18 && dot === 0) {
    numbox.value += ".";
    dot = 1;
  }
}

function numButton(numWord, num) {
  fontResize();
  numWord.onclick = function enterNum() {
    if (numbox.value === "0"){
      numbox.value = "";
    }
    if (numbox.value.length < 15){
      numbox.value += num;
      operator = 0;
    }
  }
}

numButton(seven, 7);
numButton(eight, 8);
numButton(nine, 9);
numButton(four, 4);
numButton(five, 5);
numButton(six, 6);
numButton(one, 1);
numButton(two, 2);
numButton(three, 3);
numButton(zero, 0);

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
