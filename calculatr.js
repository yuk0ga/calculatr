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

clrbtn.onclick = function clearall(){
    numbox.value = null;
  }

plumi.onclick = function plumi(){
    if(numbox.value < 0){
      numbox.value = Math.abs(numbox.value); //returns absolute value.
    }
    else {
      numbox.value = -Math.abs(numbox.value);
    }
  }

percent.onclick = function percentify(){
  numbox.value/=100;
}

/*
var numbers = [one, two, three, four, five, six, seven, eight, nine, zero];
for (x=0; x<numbers.length; x++){
  numbers[x].onclick = function enter(){
    numbox.value += x;
  }
}
*/

seven.onclick = function enterSeven(){
  numbox.value += 7;
}

eight.onclick = function enterEight(){
  numbox.value += 8;
}

nine.onclick = function enterNine(){
  numbox.value += 9;
}

four.onclick = function enterFour() {
  numbox.value += 4;
}

five.onclick = function enterFive(){
  numbox.value += 5;
}

six.onclick = function enterSix(){
  numbox.value += 6;
}

one.onclick = function enterOne(){
  numbox.value += 1;
}

two.onclick = function enterTwo(){
  numbox.value += 2;
}

three.onclick = function enterThree(){
  numbox.value += 3;
}

zero.onclick = function enterZero(){
  numbox.value += 0;
}

point.onclick = function enterPoint(){
  numbox.value += ".";
}

divbtn.onclick = function divide(){
  numbox.value += "/";
}

multibtn.onclick = function multiply(){
  numbox.value += "*";
}

plusbtn.onclick = function add(){
  numbox.value += "+";
}

minusbtn.onclick = function subtract(){
  numbox.value += "-";
}

equals.onclick = function calculate(){
  console.log(numbox.value);

}
