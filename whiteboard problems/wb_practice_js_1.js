


function get_digits(num) {
  let digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digits;

}

function digital_root(num) {
  let digits = get_digits(num);

  let root = digits.reduce(function(acc, num) {
    return acc + num;
  })

  if (root < 10) {
    return root;
  } else {
    digital_root(root);
  }


}
// digital_root(12345);



function caesarShift(phrase, shift) {

  let words = phrase.split(" ");
  let coded = [];

  let alphabet = [];

  for (var i = "a".charCodeAt(); i < "z".charCodeAt(); i++) {
    alphabet.push(i);
  }

  // very letter is now in it's appropriate shifted place
  let shifted = alphabet.slice(shift).concat(alphabet.slice(0, shift));

  words.forEach((word) => {
    let codedWord = [];
    let splitWord = word.split("");

    splitWord.forEach((letter) => {

    })

  })



}

caesarShift("abcd", 1)
caesarShift("abc def", 1)
caesarShift("z", 1)
caesarShift("hyphenated-woRd! and SpaCEs", 1)
