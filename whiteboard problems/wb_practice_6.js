

// can win?
// Given an array and index, find if it's possible to reach the value 0
// by starting at the given index and repeatedly moving left/right by
// the distance found at array[index].

// Examples Given:
// can_win?([1, 0, 1], 0)
// => true
//
// can_win?([1, 2, 0], 0)
// => false
// can win?([5, 2, 1, 0, 7, 3, 6], 1 or 7) => true


// start at given index
// from that spot, move left/right the value found
// and from that new spot, you can move left/right , and so on and so forth
const canWin = (arr, start) => {
  if (arr[start] === 0) return true;
  if (start < 0 || start > arr.length - 1) return false;

  let span = arr[start];
  let left = start - span ;
  let right = start + span;
  // memoization
  // don't want to bounce between two spots forever ^place in base as well
  arr[start] = null;
  let lresult = canWin(arr, left);
  let rresult = canWin(arr, right);

  if (rresult === true) {
    return rresult
  } else if (lresult === true){
    return lresult;
  } else {
    return false;
  }
}

// got the answer weirdly fast... and all tests work fine!

// console.log(canWin([1, 0, 1], 0));
// console.log(canWin([1, 2, 0], 0));
// console.log(canWin([5, 2, 1, 0, 7, 3, 6], 5)); // 1 or 7 or 5 === true;
// console.log(canWin([7, 4, 1, 0, 3, 2, 6], 0));



const manacher = (string) => {



}

console.log(manacher("acapella")); // should return [0, 2]


// Write a function that will take a string and return the indices of
// the start/end of the longest palindrome it contains.
// Time complexity: O(n^2)


const longestPalindrome = (string) => {

  let start = 0;
  let palLength = 2;

  for (let i = 0; i < string.length - 2; i++) {
    for (let j = 2; (i + j) < string.length - 1; j++) {
      if (string.slice(i, j) === string.slice(i, j).split("").reverse().join("")
          && j - i > palLength){
            start = i;
            palLength = j - 1
      }
    }
  }
  return [start, palLength];

}

// console.log(longestPalindrome('acapella')); // should return [0, 2]


// find all subsets of an array
// how many will it return?

const subsets = (array) => {
  if (array.length === 0) {
     return [[]];
   }

   const firstElement = array[0];
   const subSubsets = subsets(array.slice(1));

   const newSubsets = subSubsets.map(subSubset => [firstElement].concat(subSubset) );

   return subSubsets.concat(newSubsets);

}
// console.log(subsets([1, 2, 3, 4]));
