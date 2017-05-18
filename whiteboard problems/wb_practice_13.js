

// Implement a square root function that uses only addition, subtraction,
// multiplication and division in less than linear time. You may assume
// that input is always a perfect square.

// Hint: One naive solution has a better time complexity than many people
// realize--iterating from 0 until the square root is going to be O(sqrt n),
// not O(n). However, we can do better!

const sqrt = (num) => {

}

console.log(sqrt(25));



// Write a method to generate a random integer (0...7), given a method
// that generates a random integer between (0...5). The resulting rand7
// distribution must be uniform.

const rand5 = () => {
  return Math.floor(Math.random() * 6);
}

const rand7 = () => {
  let num;
  while (true) {
    num = (5 * rand5()) + rand5();
    if (num < 21) return (num % 8);
  }
}
for (var i = 0; i < 20; i++) {
  console.log(rand7());
}
