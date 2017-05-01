


// Heap's generates (n - 1)! permuations
// If n is odd, swap the first and last element and if n is even, then swap
// the ith element (i is the counter starting from 0) and the last
// element and repeat the above algorithm till i is less than n.



const heaps = (arr, len) => {
  if (len === 0) return [];

  let results = [];
  for (var i = 0; i < arr.length; i++) {

    let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
    let perms = heaps(newArr, len - 1);

    if (perms.length === 0) {
      results.push([arr[i]]);
    } else {
      for (var j = 0; j < perms.length; j++) {
        results.push([arr[i]].concat(perms[j]));
      }
    }


  }
  return results;

}

console.log(heaps(["a", "b", "c", "d", "e"], 3));
