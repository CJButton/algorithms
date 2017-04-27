
// consider moving to FL for a couple of months and continue applying
// if nothing comes, then move back to Kawasaki with Chika
// tough times!

// Detect a loop in a DLL:
// consider using a tortoise and hare strategy
// have the hare move at double speed (node.next.next), and
// have the tortoise move at single (node.next)
// if the hare and the tortoise are the same val, then we have found a loop
// if the tortoise reaches the tail node, then there is no loop




// Delete kth node frm the end of an SLL


// Find the kth node from the end in a SLL
// some kind of dragger system?
// k = 5, so we want the 5th from last element in the SLL
// kval = 11
// i = 6
// 10, 11, 12, 13, 14, 15


const permutations = (arr) => {

  // first find total perms
  let totalPerms = 1;
  for (var i = arr.length; i > 1; i--) {
    totalPerms *= i;
  }

  let results = [arr];
  let idx = 0;

  for (var i = 0; i < results[idx].length - 1; i++) {
      let copy = results[idx].slice();
      let swap = copy[i + 1];
      copy[i + 1] = copy[i];
      copy[i] = swap;
      results.push(copy)
      idx += 1;
  }
  idx += 1;
  return results;


}

// => [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
// console.log(permutations([1, 2, 3]));

// results should be:
// [ [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 1, 2 ],
//   [ 3, 2, 1 ] ]




//====================================================
// function getPermutations(str){
//     //Enclosed data to be used by the internal recursive function permutate():
//     var permutations = [],  //generated permutations stored here
//         nextWord = [],      //next word builds up in here
//         chars = []          //collection for each recursion level
//     ;
//     //---------------------
//     //split words or numbers into an array of characters
//     if (typeof str === 'string') chars = str.split('');
//     else if (typeof str === 'number') {
//       str = str + ""; //convert number to string
//       chars = str.split('');//convert string into char array
//     }
//     //============TWO Declaratives========
//     permutate(chars);
//     return permutations;
//     //===========UNDER THE HOOD===========
//     function permutate(chars){ //recursive: generates the permutations
//         if(chars.length === 0)permutations.push(nextWord.join(''));
//         for (var i=0; i < chars.length; i++){
//             chars.push(chars.shift());  //rotate the characters
//             nextWord.push(chars[0]);    //use the first char in the array
//             permutate(chars.slice(1));  //Recurse: array-less-one-char
//             nextWord.pop();             //clear for nextWord (multiple pops)
//         }
//     }
//     //--------------------------------
// }//==============END of getPermutations(str)=============

// function permut(string) {
//     if (string.length < 2) return string; // This is our break condition
//
//     var permutations = []; // This array will hold our permutations
//
//     for (var i=0; i<string.length; i++) {
//         var char = string[i];
//
//         // Cause we don't want any duplicates:
//         if (string.indexOf(char) != i) // if char was used already
//             continue;           // skip it this time
//
//         var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS
//
//         for (var subPermutation of permut(remainingString))
//             permutations.push(char + subPermutation)
//
//     }
//     return permutations;
// }


const permutation = (arr) => {
  // create results array where we will place each permuation
  // iterate over each element in the array
  // split it into pieces of 'first element' and everything else
  // [1, 2, 3] => [1] [2, 3]
  // and recurse through each new array piece
  // after reaching an empty array, we can start piecing it back together
  // console.log(arr);

  let results = [];
  for (var i = 0; i < arr.length; i++) {
    let permu = arr.slice(0, i).concat(arr.slice(i + 1));
    rest = permutation(permu);

    if (rest.length === 0) {
      results.push([arr[i]]);
    } else {
      for (var j = 0; j < rest.length; j++) {
        // console.log(rest);
        // console.log(arr[i]);
        // console.log(rest[j]);
        // console.log(j);
        // console.log();
        results.push([arr[i]].concat(rest[j]));
      }
    }
  }
  return results;

}
//
// [ [ 3 ] ]
// 2
// [ 3 ]
// 0
//
// [ [ 2 ] ]
// 3
// [ 2 ]
// 0
//
// [ [ 2, 3 ], [ 3, 2 ] ]
// 1
// [ 2, 3 ]
// 0
//
// [ [ 2, 3 ], [ 3, 2 ] ]
// 1
// [ 3, 2 ]
// 1
//
// [ [ 3 ] ]
// 1
// [ 3 ]
// 0
//
// [ [ 1 ] ]
// 3
// [ 1 ]
// 0
//
// [ [ 1, 3 ], [ 3, 1 ] ]
// 2
// [ 1, 3 ]
// 0
//
// [ [ 1, 3 ], [ 3, 1 ] ]
// 2
// [ 3, 1 ]
// 1
//
// [ [ 2 ] ]
// 1
// [ 2 ]
// 0
//
// [ [ 1 ] ]
// 2
// [ 1 ]
// 0
//
// [ [ 1, 2 ], [ 2, 1 ] ]
// 3
// [ 1, 2 ]
// 0
//
// [ [ 1, 2 ], [ 2, 1 ] ]
// 3
// [ 2, 1 ]
// 1
//
// [ [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 1, 2 ],
//   [ 3, 2, 1 ] ]



// function permutation(a){
//
//   let res = [];
//   for(let i = 0; i < a.length; i++){
//
//     let restA = a.slice(0, i).concat(a.slice(i + 1));
//     rest = permutation(restA);
//
//     if(rest.length === 0){
//       res.push([a[i]]);
//     } else {
//       for(let j = 0; j < rest.length; j++){
//         res.push([a[i]].concat(rest[j]));
//       }
//     }
//   }
//   return res;
// }

// console.log(permutation([1,2,3]));
// => [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
