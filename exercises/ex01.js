/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) {
  if (data.length < 2) {
    return 0;
  }
  data.sort((a, b) => b - a); // just .sort().reverse() sorts by string and not value.
  return data[0] + data[1];
};

sumLargestNumbers([1, 9, 1]);

module.exports = sumLargestNumbers;
