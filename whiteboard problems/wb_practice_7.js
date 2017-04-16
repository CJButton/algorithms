


// look and say
// look_and_say([1, 2, 1, 1]) == [[1, 1], [1, 2], [2, 1]]

const lns = (arr) => {

  let comp = [];
  let count = 0;
  let current = arr[0];

  arr.forEach((el) => {
    if (el === current) {
      count += 1;
    } else {
      comp.push([count, current]);
      count = 1;
      current = el;
    }
  });
  comp.push([count, current]);
  return comp;

}

console.log(lns([1, 2, 1, 1]));



// move zeros
// move all zeroes to the back of an array
// order of nonzeroes is irrelevant

const moveZeros = (arr) => {
  let front = [];
  let back = [];

  arr.forEach((num) => {
    if (num === 0) {
      back.push(num);
    } else {
      front.push(num);
    }
  });
  return front.concat(back);
}


console.log(moveZeros([1, 2, 0, 3, 4, 0, 5, 6, 0]))
//== [1, 2, 6, 3, 4, 5, 0, 0, 0]));




// Weighted Random Index
// O(n)

const weighted = (arr) => {

  let chances = [];
  arr.forEach((num) => {
    for (var i = 0; i < num; i++) {
      chances.push(num);
    }
  });
  let rand = Math.floor(Math.random() * chances.length - 1);
  return chances[rand];
}

console.log(weighted([4, 6, 8]));


// Non-Comparison Sorting:

// n strings (e.g. 5)
// each is of length k (e.g. 3)
// bat, car, cat


// Part 3:
// Say I give you an array of n strings, each of length k. I claim
// that, using merge sort, you can sort this in O(knlog(n)), since
// comparing a pair of strings takes O(k) time.

// O(n * k)
// n for going through each string's letters individually
// and k for the each word in the array

const sort3 = (arr, leng) => {

  for (var i = leng - 1; i >= 0; i--) {

    let buckets = [];
    for (var j = 0; j < 26; j++) {
      buckets.push([]);
    }

    arr.forEach((word) => {
      let letter = word[i];
      buckets[letter.charCodeAt() - "a".charCodeAt()].push(word);
    });

    arr = [];
    buckets.forEach((buck) => {
      buck.forEach((el) => {
        arr.push(el);
      });
    });
  }
  return arr;
}


// console.log(sort3([`cat`, `car`, `bat`], 3));
// bat, car, cat

// Part 2:
// Say that I give you an array of length n with numbers in the
// range 1..N (N >= n). Sort this array in O(n + N) time. You may use
// O(N) memory.
// n = 6
// N = 15
// [1, 5, 7, 9, 10, 15]

// jumbled order
// [15, 7, 9, 1, 5, 10]

const sort2 = (arr, max) => {

  let all = new Set;
  // O(n);
  arr.forEach((el) => {
    all.add(el);
  });

  let ordered = [];

  // O(N)
  for (var i = 1; i < max; i++) {
    // O(1)
    if (all.has(i)) {
      ordered.push(i);
    }
  }

  return ordered;


}
// console.log(sort2([15, 7, 9, 1, 5, 10], 15));


// Part 1:
// Say that I gave you an array of length n, containing the numbers
// 1..n in jumbled order. "Sort" this array in O(n) time. You should be
// able to do this without looking at the input.

const sort1 = (arr) => {
  let ordered = [];
  for (var i = 1; i < arr.length + 1; i++) {
    ordered.push(i)
  }
  return ordered;
}


// console.log(sort1([5, 2, 1, 9, 7, 6, 8, 3, 4, 10]));


// w3Schools Example of a Closure Counter
// var add = (function () {
//     var counter = 0;
//     console.log("inside add");
//     console.log(counter);
//     console.log();
//     return function () {return counter += 1;}
// })();

// ES6 Style Counter Closure
const counter = () => {
  let total = 0;

  // internal function is created, with access to 'total'
  // functions have access to variables in the scope above their current
  // if they are 'enclosed' by another function
  const plus = () => {
    return total += 1;
  }

  // we return the actual function, and DO NOT invoke it here
  return plus;
}

// we invoke the outer function here
const add = counter();
// and now we have access to the inner 'plus' function
// console.log(add());
// console.log(add());
// console.log(add());













//
