/*Task-2
Take four parameters. Multiply the four numbers and then return the result*/
// function mult(par1, par2, par3, par4) {
//   let mul = par1 * par2 * par3 * par4;
//   return mul;
// }
// console.log(mult(1, 2, 3, 4));

/*Task-2Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.*/
// function number(num) {
//   if (num % 2 === 0) {
//     let result = num / 2;
//     return result;
//   }
//   if (num % 2 === 1) {
//     let result = num * 2;
//     return result;
//   }
// }
// console.log(number(11));
/*Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/
// function make_avg(array) {
//   if (!Array.isArray(array)) {
//     return "Invalid";
//   }
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (Number.isInteger(array[i])) {
//       result += array[i];
//     }
//   }
//   let finalResult = result / array.length;
//   return finalResult;
// }
// console.log(make_avg([10, 12, 24, 26]));
// console.log(make_avg([20, 42, 24, 26]));
// console.log(make_avg(["a", 45, 27, 26]));
/*Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.*/
// function count_zero(number) {
//   if (typeof number !== "string") {
//     return "Invalid";
//   }
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] !== "0" && number[i] !== "1") {
//       return "Invalid";
//     }
//     if (number[i] === "0") {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(count_zero("01015010"));
// function count_zero(str) {
//   if (typeof str !== "string") return "Invalid";

//   // split string into array, filter only "0", then count
//   return str.split("0").length - 1;
// }
// console.log(count_zero("01018100010")); // 4
/*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd*/
// function odd_even(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   }
//   if (number % 2 === 1) {
//     return "Odd";
//   }
// }
// console.log(odd_even(45));
