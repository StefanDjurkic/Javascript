// primary variables
let dec = "false"; // a check for decimal placement
let total = []; // array that accepts valid numeric strings for manipulation
let string = ""; // used to store numeric strings
let lastOperator = ""; // holds the last operator used
let destruct = false; // used to check if we should clear the screen of the old value

// function which takes an operator and passes it to PushVal() to indicate we are moving through the equation
PassOperator = op => {
  console.log(op);
  // make sure there is not already an operator present then pass an operator to retain function
  if (check() == true) {
    PushVal(op);
  } else {
    lastOperator = op;
  }
};

// add a decimal to our variable
decimal = () => {
  doc = document.getElementById("Val");
  if (dec == "false") {
    if (doc.innerHTML == "0" || doc.innerHTML == NaN) {
      updateCalc("0.");
    } else {
      updateCalc(".");
    }
    dec = "true";
  }
};

// reset the calculator
AC = () => {
  clear();
  doc = document.getElementById("Val");
  doc.innerHTML = "0";
};

// used to check if an operator has been pressed
// used to prevent an overflow of operators
check = () => {
  if (lastOperator == "") {
    return true;
  } else {
    return false;
  }
};

// reset our core variables
clear = () => {
  total = [];
  string = "";
  lastOperator = "";
  dec = "false";
};

// get the result from an operation of two numbers
equal = () => {
  console.log(string);
  if (string != "" && lastOperator != "") {
    PushVal(lastOperator);

    document.getElementById("LastVal").innerHTML = document.getElementById(
      "Val"
    ).innerHTML;
    destruct = true;
  }
};

// checks which side of the equation we are at and pushes onto our array the value to be used
PushVal = op => {
  doc = document.getElementById("Val");
  console.log(total.length);
  if (total.length <= 0) {
    total.push(doc.innerHTML);
    string = "";
    appendString(op);
    dec = "false";
  } else if (total.length == 1) {
    total.push(string);
    operation(op);
  }
};

// this functions records the operator we are using and appends it to an innerhtml
appendString = a => {
  lastOperator = a;
  doc = document.getElementById("Val");
  doc.innerHTML += a;
};

// function appends to a string and to inner html used when the user pushes one of th enumeric keys
updateCalc = a => {
  doc = document.getElementById("Val");
  if (destruct == true && lastOperator == "") {
    doc.innerHTML = "0";
    destruct = false;
  }

  if (doc.innerHTML == "0") {
    doc.innerHTML = "";
  }
  string += a;
  doc.innerHTML += a;
};

// function the recieves an operator and performs it
operation = b => {
  doc = document.getElementById("Val");
  switch (b) {
    case "+":
      ret = parseFloat(total[0]) + parseFloat(total[1]);
      doc.innerHTML = "";
      updateCalc(ret);
      clear();
      break;
    case "-":
      ret = parseFloat(total[0]) - parseFloat(total[1]);
      doc.innerHTML = "";
      updateCalc(ret);
      clear();
      break;
    case "*":
      ret = parseFloat(total[0]) * parseFloat(total[1]);
      doc.innerHTML = "";
      updateCalc(ret);
      clear();
      break;
    case "/":
      ret = parseFloat(total[0]) / parseFloat(total[1]);
      doc.innerHTML = "";
      updateCalc(ret);
      clear();
      break;
  }
};
