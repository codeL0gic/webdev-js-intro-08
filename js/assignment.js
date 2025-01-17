"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// Create a function called findSmallestNumber. This function should take in the array, myNumbers. Loop through the array and return the smallest number.
function findSmallestNumber(myNumbers) {
  let smallestNumber = myNumbers[0];
  for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] < smallestNumber) {
      smallestNumber = myNumbers[i];
    }
  }
  return smallestNumber;
}

// console.log(findSmallestNumber(myNumbers));
// Create a function called findLargestNumber. This function should take in the array, myNumbers. Loop through the array and return the largest number.

function findLargestNumber(myNumbers) {
  let largestNumber = myNumbers[0];
  for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > largestNumber) {
      largestNumber = myNumbers[i];
    }
  }
  return largestNumber;
}

// Create a function called findAverage. This function should take in the array, myNumbers. Loop through the array and return the average.

function findAverage(myNumbers) {
  let total = 0;
  for (let i = 0; i < myNumbers.length; i++) {
    total += myNumbers[i];
  }
  return total / myNumbers.length;
}

// Create the remaining functionality to render your answers.
submissionBtn.addEventListener("click", () => {
  smallestNumberElement.innerHTML = findSmallestNumber(myNumbers);
  largestNumberElement.innerHTML = findLargestNumber(myNumbers);
  averageNumberElement.innerHTML = findAverage(myNumbers);
});
