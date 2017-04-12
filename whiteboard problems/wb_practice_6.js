

// find all subsets of an array
// how many will it return?

const subsets = (array) => {
  if (array.length === 0) {
     return [[]];
   }

   const firstElement = array[0];
   const subSubsets = subsets(array.slice(1));

   const newSubsets = subSubsets.map(subSubset => [firstElement].concat(subSubset) );

   return subSubsets.concat(newSubsets);

}
console.log(subsets([1, 2, 3, 4]));
