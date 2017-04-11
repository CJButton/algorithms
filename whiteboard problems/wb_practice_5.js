
// Productify
// given an array of numbers, replace all the numbers with the product
// of all the other numbers

// const productify = (arr) => {
//
//   let results = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     product = null;
//
//     if (i === 0) {
//       product = arr.slice(i + 1).reduce(function(acc, val) {
//         return acc * val;
//       });
//     } else if ( i === arr.length - 1) {
//       product = arr.slice(0, arr.length - 1).reduce(function(acc, val) {
//         return acc * val;
//       });
//     } else {
//       product = arr.slice(0, i).concat(arr.slice(i + 1, arr.length)).reduce(
//         function(acc, val) {
//           return acc * val;
//         }
//       );
//     }
//     results.push(product);
//   }
//   return results;
//
// }

// alt version
const productify = (arr) => {

  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(1);
  }

  let top = 1;
  for (let j = 0; j < arr.length; j++) {
    results[j] = results[j] * top;
    top = top * (arr[j]);
  }

  let bottom = 1;
  for (let k = arr.length - 1; k >= 0; k--) {
    results[k] = bottom * results[k];
    bottom = bottom * arr[k];
  }

  return results;
}
console.log(productify([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
//-----------------------


// matrix_region_sum

// Given a matrix of integers and (coordinates of a rectangular region
// within the matrix), find the sum of numbers falling inside the rectangle.

// function matrixRegionSum(matrix, topLeft, topRight) {
//
//
// }
//
//
// console.log(matrixRegionSum());

//------------------------

// mergeSort

function mergeHelper(left, right) {
  let sorted = [];

  while (left.length > 0 && right.length > 0) {

    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left).concat(right);

}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = Math.floor(arr.length / 2);
  let left = arr.slice(0, pivot);
  let right = arr.slice(pivot);

  let mergedLeft = mergeSort(left);
  let mergedRight = mergeSort(right);

  return mergeHelper(mergedLeft, mergedRight);
}


// console.log(mergeSort([1, 9, 3, 2, 4, 5, 8, 7, 6, 10]));

// ------------
// Binary Search
// array must already be sorted before search can take place

const binarySearch = (arr, target) => {
  let mid = Math.floor(arr.length / 2);

  if (target < arr[mid]) {
    mid = binarySearch(arr.slice(0, mid), target);
  } else if (target === arr[mid]) {
    return mid;
  } else if (target > arr[mid]){
    mid += binarySearch(arr.slice(mid), target);
  }

  return mid;

}

// console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
