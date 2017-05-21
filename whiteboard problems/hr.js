
// p. 90
// 1.1 Is Unique?
// Implement an algorithm to determine if a string has all unique characters.
// What if you cnnot use additional data structures?

// Answer 1: iterate through each indidiviudal element in the string,
// and add them to a set. Check if said character is already in the Set.
// Answer 2: 




// Arrays: Left Rotation

const arrRotation = (arr, rotate) => {

  let modRotate = rotate % arr.length;

  return arr.slice(modRotate).concat(arr.slice(0, modRotate));

}
console.log(arrRotation([1, 2, 3, 4, 5], -1));




//
