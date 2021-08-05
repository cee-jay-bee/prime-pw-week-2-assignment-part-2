// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and set the value to the string Dane.
// We then conditionally check if the variable name is equal to the string Mary
// If it is equal to the string Mary it would log 'Hi, Mary' to the console, however
// In this case name is equal to the string Dane, therefore it logs 'How do you do?' to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable secret and leave it undefined, and create a variable code and set it to the number 123
// We then conditionally check to see if the code is equal to the number 123, and if it is we set secret equal to the string 'super' and multiply the code by 2
// Then we conditionally check to see if the code is greater than 250, if it is we would then set secret equal to the string 'duper', however
// it would not be greater than 250, as it would now be 246, so we log 'super' to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We set the variable isStudent to the boolean true, the variable age to the number 34, and the variable zip to the number 55407
// We then conditionally check if the variable isStudent is true AND the zip is greater than 80000 which is not true, so we move to the next statement
// We then check if isStudent is false OR the age is less than 30, since both are false, we move to the next statement
// Next we check to see if isStudent is true, which it is, so it logs 'Welcome to Prime!' to the console. If it were not true, this would log the last statement.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//colorOne is set to red and colorTwo is set to blue, so based on the description we should switch the values of these two
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // this only sets colorOne to 'purple, so we should also add colorTwo = 'purple' to our conditional
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//this code is checking if temp is > 39 OR time is greater than or equal to 4, so we should change the code to be if(temp > 39 && time >= 4) in the conditional
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  //we should switch the console.log statements for the if and the else so that we get the correct output:
  // if (minAge <= age){
  //  console.log('enter');
  // } else {
  //  console.log('no entry');
  // }
  console.log('no entry');
} else {
  console.log('enter');
}
*/

