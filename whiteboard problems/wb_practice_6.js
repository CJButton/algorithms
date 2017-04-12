

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

console.log(longestPalindrome('acapella')); // should return [0, 2]


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
