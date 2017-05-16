


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
