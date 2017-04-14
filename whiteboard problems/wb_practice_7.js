

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
console.log(add());
console.log(add());
console.log(add());













//
