/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Jelani Thompson Student ID: 109891168 Date: Wednesday, February 1, 2017
*
********************************************************************************/
'use strict';
/******************************************
* grader(mark);
*
* Purpose: Return the calculated letter grade (string) based on the provided percentage grade (mark).
******************************************/
let grader = function(mark) {
  if (mark >= 80 && mark <= 100) { return 'A'; }
  if (mark >= 70 && mark <= 79) { return 'B'; }
  if (mark >= 60 && mark <= 69) { return 'C'; }
  if (mark >= 50 && mark <= 59) { return 'D'; }
  if (mark >= 0 && mark <= 49) { return 'F'; }
};

/******************************************
* showMultiples(num, numMultiples);
*
* Purpose: Return a string that includes all the multiples of the num argument from 1 to numMultiples separated by
newline (\n) characters (to make the output more readable)
******************************************/
function showMultiples(num, numMultiples) {
  let stringArray = [];
  for (var i = 1; i < numMultiples; i++) { stringArray.push(num * i); }
  return stringArray;
}

/******************************************
* largerNum(num1, num2);
*
* Purpose: Return the larger of the two numbers (number), or NaN if either num1 or num2 cannot be converted to a
number (ie: “a”,”abc”, etc).
******************************************/
let largerNum = function(num1, num2) {
  if(num1 > num2) { return num1; }
  else if(num2 > num1) { return num2; }
  else { return NaN; }
};

/******************************************
* tempConvert(temperature, convert);
*
* Purpose: Return the converted temperature (number) based on the provided temperature (ie, 78, 26, 37, etc) and the
provided “convert” type (ie, “CF” for Celsius-to-Farenheit or “FC” for Fahrenheit-to-Celsius).
******************************************/
function tempConvert(temperature, convert) {
  if (convert == 'CF') { return temperature * 9/5 + 32; }
  else if(convert == 'FC') { return Math.round((temperature - 32) * 5/9); }
} 

/******************************************
* evenNumbers(minNumber, maxNumber);
*
* Purpose: Return a string containing all even numbers (inclusive) starting from the provided minNumber (ie, 4, 2, 9, etc)
to the provided maxNumber (ie, 15, 33, 19, etc.) separated by a comma.
******************************************/
let evenNumbers = function (minNumber, maxNumber) {
    let array = [];
    for (minNumber; minNumber < maxNumber; minNumber++) {
        if (minNumber % 2 === 0) { array.push(minNumber); }
    }
    return array;
};

/******************************************
* passingAverage(num);
*
* Purpose: Return true if the average of all provided grades is greater than 49 and false if the average of all provided
grades is less than or equal to 49. 
******************************************/
let passingAverage = function () {
    let array = [];
    for (let arg = 0; arg < arguments.length; arg++) {
        array.push(arguments[arg]);
    }

    let sum = array.reduce (function (num1, num2) {
        return num1 + num2;
    }, 0);

    if (sum / arguments.length > 49) {
        return true;
    } else { return false; }
};

/******************************************
* counter()
*
* Purpose: Return a new function that returns a single number – one (1). However, every time this function is invoked
(called) in the future, this function will return a number that is one greater than the previous time it was
invoked (called). 
******************************************/
function counter() {
    let count = 1;
    return function() {
        return count++;
    };
}

/********************************
 *          TEST DATA           *
 *  write all of your functions *
 *      ABOVE this comment      *
 *                              *
 *  NOTE: the code below simply *
 *  invokes each function to    *
 *  show the result - it does   *
 *  not state whether the       *
 *  output is correct or not    *
 ********************************/

// Function 1 (grader)   

console.log('grader(53) returns: ' + grader(53));
console.log('grader(72) returns: ' + grader(72));
console.log('grader(91) returns: ' + grader(91));

console.log("\n");

// Function 2 (showMultiples)

console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");

// Function 3 (largerNum)
  
console.log('largerNum(2095,106) returns: ' + largerNum(2095,106));
console.log('largerNum("23",14) returns: ' + largerNum("23",14));
console.log('largerNum(108,"a") returns: ' + largerNum(108,"a"));

console.log("\n");

// Function 4 (tempConvert)

console.log('tempConvert(22,"CF") returns: ' + tempConvert(22,"CF"));
console.log('tempConvert(76,"FC") returns: ' + tempConvert(76,"FC"));
console.log('tempConvert(16,"CF") returns: ' + tempConvert(16,"CF"));

console.log("\n");

// Function 5 (evenNumbers)

console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));

console.log("\n");

// Function 6 (passingAverage)

console.log('passingAverage(75,42,98) returns: ' + passingAverage(75,42,98));
console.log('passingAverage(34,93,77,89,49) returns: ' + passingAverage(34,93,77,89,49));
console.log('passingAverage(33,61) returns: ' + passingAverage(33,61));

console.log("\n");

// Functinon 7 (counter)

var count = counter();

console.log('counter() returns: ' + count);
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());