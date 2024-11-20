// Function to reverse a string

function reverseStringManual(str) {
    // Initialize an empty string to store reversed characters
    let reversed = '';
    
    // Iterate through input string from end to beginning
    for (let i = str.length - 1; i >= 0; i--) {
        // Append each character to the reversed string
        reversed += str[i];
    }
    
    return reversed;
}
// Example usage
console.log(reverseStringManual('hello')); // Outputs: 'olleh'


//////////////////////////////////////////////////////////////////


// FizzBuzz implementation
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// Run the function
fizzBuzz();


///////////////////////////////////////////////////////////////


// Function to determine if a number is even or odd
function checkEvenOdd(number) {
    // Use modulo operator to check divisibility by 2
    return number % 2 === 0 ? "Even" : "Odd";
}

// Example usage
console.log(checkEvenOdd(3));   // Outputs: "Odd"
console.log(checkEvenOdd(8));   // Outputs: "Even"