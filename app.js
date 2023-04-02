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

function arraySum(array, i) {
  // This function takes an array and starting index and returns the sum of elements in the array.
  if (array.length == 0) {
    return 0;
  }

  if (i == array.length - 1) {
    // if reached end of array.
    return array[i];
  }
  return array[i] + arraySum(array, i + 1);
}

console.log(`Sum of Array = ${arraySum([1, 2, 3, 4, 5, 6], 0)}`); // sum = 21

// Reverse a String: Write a program that Reverses a string.

function reverseString(str, strLength) {
  // strLength -> is the length of the string.

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



// DATA STRUCTURE STACK AND QUEUE
// 1. Implement a function that returns the minimum element in a stack in constant time complexity O(1).

function getMin() {
  if (s.length == 0) console.log("Stack is empty");
  else console.log("Minimum Element in the stack is: ", minEle);
}

function push(x) {
  if (s.length == 0) {
    minEle = x;
    s.unshift(x); // To ADD to the Top of stack
    return;
  } else if (x < minEle) {
    s.unshift(x);
    minEle = x;
  } else s.unshift(x);
}

let minEle;

let s = [];
push(39);
push(56);
push(10);
push(95);
push(100);
console.log(`Stack: ${s}`);
getMin();





// 2. Given a queue of integers, reverse the order of the elements in the queue.

function reverse(queue) {
 

  // output queue
  let reverseQueue = [];

  for (let i = (queue.length -1); i >= 0; i--) {

     reverseQueue.push(queue[i]);

  }
  return reverseQueue;
}

let queue = [];

// Queue elements
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(`Queue: ${queue}`);
queue = reverse(queue);

// Print the Queue
console.log(`Reversed Queue: ${queue}`);



// 3. Implement a Queue using 2 stacks s1 and s2.

let s1 = [];
let s2 = [];



function enqueue(element) {
  s1.push(element);

}


function dequeue() {
  if (s2.length === 0) {
    if (s1.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (s1.length > 0) {
      let p = s1.pop();
      s2.push(p);
    }
  }


  let deqEle = s2.pop();
  while (s2.length > 0) {
    let p = s2.pop();
    s1.push(p);
  
}
return deqEle;

}

enqueue('a');
enqueue('b');
enqueue('c');
enqueue('d');
enqueue('e');

console.log(`Queue using 2 stacks s1 and s2: ${s1}`);
console.log(`Dequeuing Element: ${dequeue()}`); 
// dequeue();
console.log(`Queue using 2 stacks s1 and s2: ${s1}`);
