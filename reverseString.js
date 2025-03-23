// 1. Reverse a string

const readline = require('readline');

// Create a new interface for reading data from standard input and writing the standard output
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to reverse a string (using a ternery operator)
// If the length of the string is less than or equal to 1 (string.length <= 1), then it's returning the string itself
// If not function calls itself on a smaller portion of the string (string.slice(0, -1)) and adds the last character (string.slice(-1)) to it
const reverseString = (string) => {
    return string.length <= 1 ? string : string.slice(-1) + reverseString(string.slice(0, -1));
};

// Get user input
read.question("Enter a string: ", (str) => {
    console.log("Reversed string: ", reverseString(str));
    read.close();
})