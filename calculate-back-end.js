/******************
 * YOUR CODE HERE *
 ******************/

// function calculate(num1, num2, operator){
//   if (operator === '+' || operator === 'plus' || operator === 'added to'){
//     return parseInt(num1) + parseInt(num2);
//   }
//   if (operator === '-' || operator === 'minus' || operator === 'subtracted from'){
//     return parseInt(num1) - parseInt(num2);
//   }
//   if (operator === 'x' || operator === 'times' || operator === 'X' || operator === 'multiplied by' ){
//     return parseInt(num1) * parseInt(num2);
//   }
//   if (operator === '/' || operator === 'divided by'){
//     return parseInt(num1) / parseInt(num2);
//   }
//   if (operator === '%' || operator === 'modulus' || operator === 'mod'){
//     return parseInt(num1) % parseInt(num2);
//   }
//   else{return "Sorry, that's not a mathematical operation!"}
// }


function calculate(num1, num2, operator){
  switch(operator) {
    case '+': 
    case 'plus': 
    case 'added to':
    return parseInt(num1) + parseInt(num2);
    
    case "-": 
    case "minus": 
    case "subtracted from":
    return parseInt(num1) - parseInt(num2);

    case 'x': 
    case 'times': 
    case 'X': 
    case "multiplied by":
    return parseInt(num1) * parseInt(num2);

    case '/': 
    case 'divided by': 
    return parseInt(num1) / parseInt(num2);

    case '%': 
    case 'modulus': 
    case "mod": 
    return parseInt(num1) % parseInt(num2);
      
    default:
    return "Sorry, that's not a mathematical operation!"

  }}

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;