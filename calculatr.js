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
var equalbtn = 0;
var operator = 0;
var dot = 0;
var values = [];

function fontResize (){
if (numbox.value.length > 6 && numbox.value.length <= 9) {
    numbox.style.fontSize = "500%";
  } else if (numbox.value.length > 9 && numbox.value.length <= 12) {
    numbox.style.fontSize = "400%";
  } else if (numbox.value.length > 12) {
    numbox.style.fontSize = "290%";
  } else {
    numbox.style.fontSize = "700%";
  }
}

clrbtn.onclick = function clearall(){
    numbox.value = "0";
    operator = 0;
    equalbtn = 0;
    dot = 0;
    values = [];
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
  numWord.onclick = function enterNum() {
    if (numbox.value === "0" || equalbtn === 1){
      numbox.value = "";
      equalbtn = 0;
    }
    if (operator !== 0){
      values[0] = numbox.value;
      numbox.value = "";
    }
    if (numbox.value.length < 18){
      numbox.value += num;
      //operator = 0;  // I wasn't able to do continuous calculation bc of this.
    }
    fontResize();
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

function operation (opebtn, opeValue, opeSign) {
  opebtn.onclick = function operate(){
    if (equalbtn === 0 && operator !== 0) { //コメントアウトされてた
      values[2] = numbox.value;
      var tempans = eval(values[0]+values[1]+values[2]);
      numbox.value = tempans;
      fontResize();
      values[1] = opeSign;
      operator = opeValue;
      dot = 0;
    } //コメントアウトされてた
    //if (operator !== opeValue) {
      values[1] = opeSign;
      operator = opeValue;
      dot = 0;
      equalbtn = 0;
    //}
  }
}

operation (divbtn, 1, "/");
operation (multibtn, 2, "*");
operation (plusbtn, 3, "+");
operation (minusbtn, 4, "-");

equals.onclick = function calculate(){
values[2] = numbox.value;
var answer = eval(values[0]+values[1]+values[2]);
numbox.value = answer;
fontResize();
operator = 0;
equalbtn = 1;
}
