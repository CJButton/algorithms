

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


console.log(mergeSort([1, 9, 3, 2, 4, 5, 8, 7, 6, 10]));
