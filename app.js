//  Fibonacci Series: Write a program to print Fibonacci for a given number.
// The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1.

function fibonacci(num) {
  if (num == 0) {
    return 0;
  }
  if (num == 1 || num == 2) {
    return 1;
  }

  return fibonacci(num - 2) + fibonacci(num - 1);
}

let num = 6;
console.log(`fib(${num}) = ${fibonacci(num)}`); // fib(6) = 8



//The sum of Array Elements: Write a program that Calculates the sum of elements in an array.

function arraySum(array, i) { // This function takes an array and starting index and returns the sum of elements in the array.
  if (array.length == 0) {
    return 0;
  }

  if (i == array.length - 1) { // if reached end of array.
    return array[i];
  }
  return array[i] + arraySum(array, i + 1); 
}

console.log(`Sum of Array = ${arraySum([1, 2, 3, 4, 5, 6], 0)}`); // sum = 21



// Reverse a String: Write a program that Reverses a string.

function reverseString(str, strLength) { // strLength -> is the length of the string.
 
    if (str.length === 0) {
        return "Empty string";
      }
    
      if (strLength == 1) { 
        return str[strLength - 1];
      }
      return str[strLength - 1] + reverseString(str, strLength - 1);


}

console.log(`Reversed String: ${reverseString("hello", 5)}`); // hello -> olleh
console.log(`Reversed String: ${reverseString("Amani", 5)}`); // Amani -> inamA
