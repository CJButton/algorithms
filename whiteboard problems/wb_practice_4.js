

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

// silly years
// Write a function that takes a year (four digit integer) and returns an
// array with the 10 closest subsequent years that meet the following
// condition: the first two digits summed with the last two digits are
// equal to the middle two digits

// 1978 => 19 + 78 = 97
// 2307 => 23 + 07 = 30

// steps we need to take:
// 1. get back 2 integers and add together
// 2. get front 2 integers and add together
// 3. compare to the middle two
function sillyHelper(year) {
  // 1987
  let strYear = year.toString();
  let back = strYear.slice(2);
  let front = strYear.slice(0, 2);
  let middle = strYear.slice(1, 3);
  if (parseInt(back) + parseInt(front) == middle) {
    return true;
  }
  return false;
}

function sillyYears(year) {
  if (year < 1000) return null;
  let years = [];

  while (years.length < 10) {
    if (sillyHelper(year) === true) {
      years.push(year);
    }
    year += 1;
  }
  return years;

}

console.log(sillyYears(1978));

// pair sum
// Given an array of integers, return all pairs that sum up to a
// specified value k. List the pairs in [min, max] order.
function pairSum(arr, tgt) {

  let allPairs = [];

  let seen = new Set;

  arr.forEach((el) => {
    // now we know the missing number we need to complete the triple!
    let target = tgt - el;

    if (seen.has(target)) {
      let mini = [];
      let min = Math.min(target, el);
      let max = Math.max(target, el)

      mini.push(min);
      mini.push(max);
      allPairs.push(mini);
    }

    seen.add(el);

  });
  return allPairs;
}


console.log(pairSum([1, 2, -1, -1, -2], -1));
