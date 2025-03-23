// 2. Find the second-largest number in an array.

const readline = require('readline');

// Create a new interface for reading data from standard input and writing the standard output
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the second largest number in an array
// The sort() method sorts the array
// Sorting is done in descending order using a comparison
// b - a is to ensure that if b is larger than a, they get change their index
// A loop goes through the array finally starting from the second element, checking each element to see if it's smaller than the largest number
const secondLargest = (array) => {
    array.sort((a, b) => b - a);
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[0]) {
            return array[i]
        }
    }
    return null;
}

// Get user input
read.question("Enter some numbers (seperated by commas): ", (nums) => {
    const numArray = nums.split(',').map(Number).filter(n => !isNaN(n));
    console.log("Second largest number: ", secondLargest(numArray));
    read.close();
})