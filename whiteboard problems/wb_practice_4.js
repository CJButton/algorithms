

// find all unique subs

function uniqueSubs(str) {
  let exists = {};

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 2; j < str.length + 1; j++) {
      if (!exists.hasOwnProperty(str.slice(i, j))) {
        exists[str.slice(i, j)] = true;
      }
    }
  }
  return Object.keys(exists);
}

console.log(uniqueSubs("abab"));
// ["ab", "aba", "abab", "ba", "bab"]

// find largest contigious subsum

// Given an array of integers (positive and negative)
// find the largest contiguous subsum (sum of a subarray).
function largestSubSum(arr) {
  let currentMax = 0;
  let max = arr[0];

  arr.forEach((el) => {
    currentMax += el;
    if (currentMax > max) max = currentMax;
    if (currentMax < 0) currentMax = 0;
  })

  return max;
}

console.log(largestSubSum([5, 3, -7, 6]));
