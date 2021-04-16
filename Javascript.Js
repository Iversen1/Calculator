// // add function
// function add(a, b) {
//   return a + b;
// }

// //subtract function
// function subtract(a, b) {
//   return a - b;
// }

// //multiply function 
// function multiply(a, b) {
//   return a * b;
// }

// // divide function 
// function divide(a, b) {
//   return a/b;
// }

// //operator function
// function Oldoperate(operator, a, b){
//   if (operator === add) {
//       return add(a, b);
//     }
//     if (operator === subtract) {
//       return subtract(a, b);
//     }
//     if (operator === multiply) {
//         return multiply(a, b);
//     }
//     if (operator === divide) {
//         return divide(a, b);
//     }
// }




// When a number button is clicked it is shown in the display and 
// the number is temporarily stored in the array, 
// the join function removes comma
// const firstNum= [];
// dataNumber.forEach(button => {
//   button.addEventListener('click', () => {
//     firstNum.push(button.id);
//     display.placeholder = firstNum.join("");
//       })
// });

// step 5
// a number is pressed and this is stored in a variable "firstNum"
// an operator is pressed and saved as a variable
// the user presses "=" and the function "operate" runs


// This listens for when an operator is clicked and pushes it to an
// array "operatorArr" and console.log it
// operatorArr = [];
// dataOperator.forEach(button =>{
//   button.addEventListener('click', () => {
//     operatorArr.push(button.id);
//     console.log(operatorArr);
//   } )
// });

// if button press equals "=" use the firstNUm and operatorArr arrays

// add eventlistener, and it will execute a function if an operator is clicked
// e.g. "+" it calls the add function

// const dataNumber = document.querySelectorAll('[data-number]');
// const dataOperator = document.querySelectorAll('[data-operator]');
// const equal = document.querySelector('[data-equal]');
// const addButton = document.getElementById('+');



const display = document.querySelector('.number-display');

display.textContent = '0';

let num1 = '';
let num2 = '';
let operator = '';

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', getValue));

function getValue(e) {
      let buttonValue = e.target.value;

      if ( buttonValue === "+" | buttonValue === "-" | buttonValue === "/" | buttonValue === "*") {
          if (num1) {
            operator = buttonValue;
            display.textContent = operator;
          }
        } else if (buttonValue === '=') {
          if (num1 && num2) {
            operate(num1, num2, operator);
          } else {
            display.textContent = num1;
          }
        } else if (buttonValue === 'clear') {
          clear();
        } else if (num1 && operator ) {
            num2 += buttonValue;
            display.textContent = num2;
        } else {
          num1 += buttonValue;
          display.textContent = num1; 
        }
      }
      

function operate() {
  let result;
  number1 = parseFloat(num1);
  number2 = parseFloat(num2);

  if (operator === '+') {
  result = number1 + number2;
} else if (operator === '-') {
  result = number1 - number2;
} else if (operator === '*') {
  result = number1 * number2;
} else if (operator === '/') {
  result = number1 / number2;
} 
  display.textContent = result;
  num1 = result;
  operator = '';
  num2 = '';
}

function clear() {
  display.textContent = "0";
  num1 = '';
  num2 = '';
  operator = '';
}


//Nået til punkt 5
// Noter til senere: tilføj keycodes, se første par minutter af Wesbos drumset


// Nedenstående kan evt slettes. 

//numberButtons.forEach(button => {
  //button.addEventListener('click', () => {
    //display.placeholder = button.id;
    //let tempNumber = button.id;
    //console.log(tempNumber);
  //})
//});


