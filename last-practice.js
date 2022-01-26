//declare a variable in javascript

var age = 24;  //numeric type variable
var name = 'Kamrul Hasan ' // string type variable
var myAddress = "Dhaka Bangladesh";
var isRaining = true; // boolean type variables

//==================================================

//Mathematical operation
var num1 = 10;
var num2 = 2;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// var result = num1 + num2;
// console.log(result);

// var result = num1 - num2;
// console.log(result);

// var result = num1 * num2;
// console.log(result);

// var result = num1 / num2;
// console.log(result);

//=================================================

//Modulus operator or remainder operator
var num3 = 17;
var num4 = 5;
var remainder = num3 % num4;
// console.log(remainder);

// conversion
// var num5 = 5.3;
// var num6 = '4.2';
// num6 = parseFloat(num6);
// var total = num5 + num6;
// total = parseFloat(total);
// console.log(total);

var num5 = 0.1122;
var num6 = 0.2121;
var total = num5 + num6;
total = total.toFixed(4);
// console.log(parseFloat(total));
// total = parseFloat(total);
// console.log(parseFloat(total.toFixed(3)));

//================================================

var number = 12;
// number = number + 1
// number += 1;
// number++;
// console.log(number);

// number = number - 1;
// number -= 1;
// number--;
// console.log(number);

//===============================================

// check data type
console.log(typeof number);
console.log(typeof name);
console.log(typeof isRaining);


var today = new Date();
console.log(today);
