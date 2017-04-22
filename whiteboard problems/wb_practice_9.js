

// Interleaving?

// Given three strings, return whether the third is an interleaving of
// the first two. Interleaving means it only contains characters from
// the other two, no more no less, and preserves their character
// ordering. "abdecf" is an interleaving of "abc" and "def".
// Note that the first two strings needn't be in alphabetical order
// like these.

// You may assume that the first two strings do not contain any
// characters in common.
const interleaving = (str1, str2, str3) => {
  if (str1.length + str2.length !== str3.length) return false;


  let first = str1.split("");
  let second = str2.split("");
  let third = str3.split("");
  let shared = {};
  let sharedArr = [];

  third.forEach((el, idx) => {
    if (first[0] === el && second[0] === first[0]) {
      if (el in shared) {
        shared[el] = shared[el] += 1;
        first.shift();
        second.shift();
      } else {
        shared[el] = 1;
        sharedArr.push(el);
        first.shift();
        second.shift();
      }
    } else if (first[0] === el) {
      first.shift();
    } else if (second[0] === el) {
      second.shift();
    } else if (el in shared) {
      shared[el] = (shared[el] -= 1);
      if (shared[el] === 0) {
        delete shared[el];
      }
    }
  });


  // note that shared === {} returns false; also with ==
  // interesting

  if ((first.length + second.length === 0) &&
                      Object.keys(shared).length === 0) {
    return true;
  } else {
    return false;
  }

}



console.log(interleaving('xxy', 'xxz', 'xxzxxy'));
// console.log(interleaving('abc', 'def', 'abdecf'));
// abdecf => true


// Find the Missing Number

// Assume an array of non-negative integers. A second array is formed
// by shuffling the elements of the first array and deleting a random
// element. Given these two arrays, find which element is missing in
// the second array. Do this in linear time with constant memory use.


// if both arrays are handed back, and we don't need to shuffle manually
const missing = (arr1, arr2) => {

  let one = arr1.reduce((total, el) => {
    return total + el;
  });

  let two = arr2.reduce((total, el) => {
    return total + el;
  });

  return one - two;
}



// const missing = (arr) => {
//
//   let copy = [];
//   arr.forEach((el) => {
//     copy.push(el);
//   });
//
//   let shuffled = new Set;
//
//   for (var i = copy.length; i > 1; i--) {
//     let rand = Math.floor(Math.random() * copy.length);
//     shuffled.add(copy.splice(rand, 1)[0]);
//   }
//
//   for (i of arr) {
//     if (shuffled.has(i) === false) {
//       return i;
//     }
//   }
//
// }

// console.log(missing([1, 2, 3, 4, 5], [1, 2, 3, 5]));






// Hash Directory
// Suppose a hash representing a directory. All keys are strings with
// names for either folders or files. Keys that are folders point to
// nested hashes. Keys that are files point to "true". Write a function
// that takes such a hash and returns an array of strings with the path
// to each file in the hash.

// need to 'tunnel down' to the true value
// find key
// iterate over every value that the key has
// if it is a hash, then recurse call
// if it is true, then finish recurse, and return the key
// pass the key and the value into all files

// return to later; having trouble solving...

// const directory = (hash) => {
//
//   let files = [];
//
//   Object.keys(hash).forEach((item, nested) => {
//
//     if (hash[item] !== true) {
//       nested = directory(hash[item]);
//
//
//
//
//     } else {
//       files.push(item);
//     }
//   });
//
//
// }

// in Ruby
// def file_list(hash)
//   files = []
//
//   hash.each do |item, nested_item|
//     if nested_item.is_a?(Hash)
//       folder = item
//       nested_files = file_list(nested_item)
//       nested_files.each { |file| files << "#{folder}/#{file}" }
//     else
//       files << item
//     end
//   end
//
//   files
// end


// Example:
const files = {
  'a' : {
    'b' : {
      'c' : {
        'd' : {
          'e' : true
        },
        'f' : true
      }
    }
  }
}
// console.log(directory(files));
//
// file_list(files) # => ['a/b/c/d/e', 'a/b/c/f']
