


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

  // every letter is now in it's appropriate shifted place
  let shifted = alphabet.slice(shift).concat(alphabet.slice(0, shift));

  words.forEach((word) => {
    let codedWord = [];
    let splitWord = word.split("");

    // be super careful about difference between indexOf and findIndex
    // former only needs element, latter wants a callback
    splitWord.forEach((letter) => {
      let letterIdx = alphabet.indexOf(letter.toLowerCase().charCodeAt());

      if (!shifted.includes(letter.toLowerCase().charCodeAt())) {
        codedWord.push(letter);
      } else {
        letter === letter.toLowerCase() ?
                codedWord.push(String.fromCharCode(shifted[letterIdx])) :
                codedWord.push(String.fromCharCode(shifted[letterIdx]).toUpperCase());
      }
    })

    coded.push(codedWord.join(""));

  })


  console.log(coded.join(" "));

}
//
// caesarShift("abcd", 1)
// caesarShift("abc def", 1)
// caesarShift("z", 1)
// caesarShift("hyphenated-woRd! and SpaCEs", 1)
//---------------------------------------
const makeMatrix = function(str1, str2) {

  let matrix = [];
  for (let i = 0; i < str1.length + 1; i++) {
    matrix.push([]);
  }
  matrix.forEach((arr) => {
    for(let j = 0; j < str2.length + 1; j++) {
      arr.push(0);
    }
  });

  str1.split("").forEach((el, idx) => {
    str2.split("").forEach((el2, idx2) => {
      if (el === el2) {
        matrix[idx + 1][idx2 + 1] = (matrix[idx][idx2]) + 1
      } else {
        matrix[idx + 1][idx2 + 1] = 0;
      }
    })
  });

  let longestSubArray = "";

  matrix.forEach((row, idx1) => {
    row.forEach((length, idx2) => {
      if (length > longestSubArray.length) {
        longestSubArray = str1.slice(idx2 - length, idx2)
      }
    })
  })
  console.log(longestSubArray);

}
// makeMatrix("abba", "abbc")

//-------------------------------------------

// Write a function that takes an array of integers and returns their sum. Use recursion.
function sumRec(arr) {

  if (arr.length === 0) {
    return 0;
  }

  // don't forget your returns!!!
  return arr[0] + sumRec(arr.slice(1));

}
// console.log(sumRec([1, 2, 3, 4, 5]));
