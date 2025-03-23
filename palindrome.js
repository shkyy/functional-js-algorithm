// 3. Check if a given string is a palindrome

const readline = require('readline');

// Create a new interface for reading data from standard input and writing the standard output
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funtion to check whether a given string is a palindrome or not
const isStringPalindrome = (str) => {

    // Converts the entire string to lowercase to ensure its not case sensitive
    // replace() removes any characters that are not letters or numbers, even the spaces
    // g, global flag to have all the occurrences replaced
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Splits the cleaned string into an array of individual characters
    // And reverses the order of the array of characters
    // Lastly join the reveresed array back into a single string
    let reversed = cleaned.split('').reverse().join('');

    // returns true or false 
    return cleaned === reversed;
}

// Get user input
read.question("Enter a string: ", (str) => {
    console.log("Reversed string: ", isStringPalindrome(str));
    read.close();
})