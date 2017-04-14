

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
  console.log(arr);
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












//
