
// I give you a scrambled list of n unique integers between 0 and n.
// Tell me what number is missing.

// O(n) for time;
// O(1) for space;
const missing2 = (arr) => {

  // the plus one is for the missing element
  let total = (arr.length + 1) * arr.length / 2;
  let real = arr.reduce((accum, el) => {
    return accum + el;
  });
  return real - total - 1;
}

console.log(missing2([1, 5, 9, 7, 6, 2, 3, 8])); // => 4 is missing


// O(n) for time
// O(n) for space
const missing = (arr) => {

  let found = new Set;
  arr.forEach((el) => {
    found.add(el);
  });
  let num = null;

  for (var i = 1; i < arr.length - 1; i++) {
    if (!found.has(i)) {
      num = i;
    }
  }
  return num;
}

console.log(missing([1, 5, 9, 7, 6, 2, 3, 8])); // => 4 is missing
