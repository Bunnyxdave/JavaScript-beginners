//baby programs for logic building #1
// Function to print the first 10 even numbers


function printFirstEvenNumbers(count = 10) {
  // We start with 0 as it's the first non-negative even number.
  for (let i = 0; i < count; i++) {
    // An even number can be found by multiplying any integer by 2.
    const evenNumber = i * 2;
    console.log(evenNumber);
  }
}

printFirstEvenNumbers(); // Prints the first 10 even numbers.



//baby programs for logic building #2
// Function to print the first 10 odd numbers

function printFirstOddNumbers(count = 10) {
  // We start with 1 as it's the first odd number.
  for (let i = 0; i < count; i++) {
    // An odd number can be found by multiplying any integer by 2 and adding 1.
    const oddNumber = i * 2 + 1;
    console.log(oddNumber);
  }
}

printFirstOddNumbers(); // Prints the first 10 odd numbers.

//baby programs for logic building #3
// Function to print the numbers divisible by 3 in first 10 natural numbers

function printNumbersDivisibleBy3(limit = 10) {
  for (let i = 1; i <= limit; i++) {
    // Check if the number is divisible by 3 using the modulus operator.
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

printNumbersDivisibleBy3(); // Prints the numbers divisible by 3 in the first 10 natural numbers.       


//baby programs for logic building #4
// Function to print the first 10 multiples of 5

function printFirstMultiplesOf5(count = 10) {
    for (let i = 1; i <= count; i++) {
        // A multiple of 5 can be found by multiplying any integer by 5. 
        const multipleOf5 = i * 5;
        console.log(multipleOf5);
    }
}

printFirstMultiplesOf5(); // Prints the first 10 multiples of 5.    


//baby programs for logic building #5
// Function to print the first 10 multiples of 7

function printFirstMultiplesOf7(count = 10) {
    for (let i = 1; i <= count; i++) {
        // A multiple of 7 can be found by multiplying any integer by 7. 
        const multipleOf7 = i * 7;
        console.log(multipleOf7);
    }
}

printFirstMultiplesOf7(); // Prints the first 10 multiples of 7.    




//baby programs for logic building #6
// Basic Calculator

function basicCalculator(a,b) {

    function add(x, y) {
        return x + y;
    }       
    function subtract(x, y) {
        return x - y;
    }
    function multiply(x, y) {
        return x * y;
    }
    function divide(x, y) {
        return x / y;
    }
    console.log("Addition: " + add(a, b));
    console.log("Subtraction: " + subtract(a, b));
    console.log("Multiplication: " + multiply(a, b));
    console.log("Division: " + divide(a, b));
}       
basicCalculator(10, 5); // Example usage with 10 and 5 as inputs.
// Outputs the results of addition, subtraction, multiplication, and division.
// Addition: 15
// Subtraction: 5
// Multiplication: 50
// Division: 2

