

// Max Unique pSub
// Given a string, find the lexicographically greatest pseudo-substring.
// lexicographical order === dictionary order
//
// Example (read on for further explanation):
//
// max_unique_psub('abcdef')
// => 'f'
//
// max_unique_psub('abcdefedcba')
// => 'fedcba'
//
// max_unique_psub('algorithms')
// => 'ts'

// Let's define a pseudo-substring: psub is any subset that is ordered
// by index. (Differs from a standard substring because it does not need
// to be contiguous.)
//
// For example:
//
// "ac" is a psub of "acb"
// "cb" is a psub of "acb"
// "bc" is _not_ a psub of "acb" (letters are out of order)
//
// psubs("acb") == [
//   "a",
//   "ac",
//   "acb",
//   "ab",
//   "c",
//   "cb",
//   "b"
// ]

// Next, let's define lexicographical order:

// str1 > str2 IF
// (a) str1 != str2 AND EITHER
// (b1) str2 is a prefix of str1 OR
// (b2) at the first position at which str1 and str2 differ (say i), str1[i] > str2[i].
// For instance: "abc" > "ab" and "acb" > "abc".


const psubs = (string) => {

  // psub_arr = [str[str.length - 1]]
  //
  // (str.length - 2).downto(0) do |i|
  //   next if str[i] < psub_arr.last
  //   # this is amortized O(1) time.
  //   psub_arr << str[i]
  // end
  //
  // psub = psub_arr.reverse.join("")
  // psub

  let subs = [string[string.length - 1]]

  for (var i = string.length - 2; i > 0; i--) {
    if (string[i] < subs[string.length - 1]) {
      continue
    }
    subs.push(string[i]);
  }
  return subs.reverse().join("");

end

}

console.log(psubs("abcdefedcba"));



// Factorial

// Implement factorial with and without recursion. What is a potential
// disadvantage of the recursive way?

// What is tail-recursion? Does Ruby have tail-call optimization?
// Pretend it did; write a tail-recursive version of rec_fac.

// After testing, tail recursion is 10 times slower than standard recursion!
// tail recursion 2.679
// standared rec  0.265
// iteration      0.261
// why though? tail recursion is supposed to be faster
// got it! when tested individually, they come out similarly when
// recursing 10
// when working with 100, the CTO is marginally faster, but the
// iterator still generally won

const factorial3 = (n) => {
  return facrec(n, 1);
}

const facrec = (x, acc) => {
  if (x <= 1) {
    return acc;
  } else {
    return facrec(x - 1, x * acc);
  }
}
// var t1 = performance.now();
// console.log(factorial3(100));
// var t2 = performance.now();
// console.log(t2 - t1);
// 2.5 - 3.6


// Tail Call Optimization (TCO)
// make function calls, without growing the call stack
// a tail position (i.e., the last action in a function)
// function forEach(arr, callback, start = 0) {
//     if (0 <= start && start < arr.length) {
//         callback(arr[start], start, arr);
//         return forEach(arr, callback, start+1); // tail call
//     }
// }
// var t1 = performance.now();
// forEach(['a', 'b'], (elem, i) => console.log(`${i}. ${elem}`));
// var t2 = performance.now();
// console.log(t2 - t1);
//
//
// const forEach2 = (arr, callback, start = 0) => {
//   if (0 <= start && start < arr.length) {
//     callback(arr[start], start, arr);
//     return forEach2(arr, callback, start + 1);
//   }
// }
// var t4 = performance.now();
// forEach2(['a', 'b'], (elem, i) => console.log(`${i}. ${elem}`));
// var t5 = performance.now();
// console.log(t5 - t4);
//
// function findIndex(arr, predicate, start = 0) {
//     if (0 <= start && start < arr.length) {
//         if (predicate(arr[start])) {
//             return start;
//         }
//         return findIndex(arr, predicate, start+1); // tail call
//     }
// }
// findIndex(['a', 'b'], x => x === `b`); // 1




// O(n)
// with recursion
// downsides of recursion is it takes up more memory than iterating
// i.e. space complexity of O(n)
const factorial2 = (num) => {
  if (num === 1) return num;

  base = factorial2(num - 1);
  return base *= num;

}
// console.log();
// var t3 = performance.now();
// console.log(factorial2(100)); // 120
// var t4 = performance.now();
// console.log(t4 - t3);
// console.log(factorial2(6)); // 170
// 3 - 4

// O(n)
// 5! => 5 * 4 * 3 * 2 * 1 === 120
// without recursion
const factorial = (num) => {
  let total = 1;
  for (var num; num > 1; num--) {
    total = total * num
  }
  return total;
}
// console.log();
// var t5 = performance.now();
// console.log(factorial(100)); // 120
// var t6 = performance.now();
// console.log(t6 - t5);
// 2.5 - 3.2 roughly





// Binary
// Write a function that takes an integer and returns it in binary form.
// we want a 1 or a 0 from each number
// so we use % 2, as the num either divides evenly, leaving 0, or it has
// a remainder of 1
// we do this until we reach zero
// O(log n)
const binary = (num) => {
  if (num === 0) return 0;

  let result = [];
  while (num > 0) {
    result.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return result.join("")
}

// console.log(binary(0)); // 0
// console.log(binary(1)); // 1
// console.log(binary(2)); // 10
// console.log(binary(3)); // 11
// console.log(binary(11)); // 1011
