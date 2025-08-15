/*Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output:
['orange', 'yellow', 'green', 'blue', 'red']*/
// const colors = ["red", "blue", "green", "yellow", "orange"];
// let newArray = [];
// for (let i = colors.length - 1; i >= 0; i--) {
//   newArray.push(colors[i]);
// }
// console.log(newArray);

/*Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
[12, 98, 76, 46]*/
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const newNum = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     newNum.push(numbers[i]);
//   }
// }
// for (let num of numbers) {
//   if (num % 2 === 1) {
//     newNum.push(num);
//   }
// }
// console.log(newNum);

/*Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:
'TomTimTinTik'*/
// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// var newNum = "";
// for (var num of numbers) {
//   newNum += num;
// }
// console.log(newNum);

/*Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'
Output:
'person working hard a am I'*/
// const statement = "I am a hard working person";
// const newState = [];
// const finalState = statement.split(" ");
// for (let i = finalState.length - 1; i >= 0; i--) {
//   newState.push(finalState[i]);
// }
// const result = newState.join(" ");
// console.log(result);

/*Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
Input: [1, 2, 3]
Expected Output:
Original: [1, 2, 3] Copy: [99, 2, 3]*/
// const array = [1, 2, 3];
// const newArray = [...array];
// newArray[0] = 99;
// console.log(array, newArray);

/*Task 6
Given an array of student objects, print each student’s name and marks.
[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]*/
// let data = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
// ];
// for (let nam of data) {
//   let person = nam;
//   let result = person.name + " " + "scored" + " " + person.marks;
//   console.log(result);
// }

/*ask 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]*/
// const array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(array);
// array[1][0] = 99;
// console.log(array);
