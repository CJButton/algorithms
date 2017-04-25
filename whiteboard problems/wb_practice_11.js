


function permutation(a){

  let res = [];
  for(let i = 0; i < a.length; i++){

    let restA = a.slice(0, i).concat(a.slice(i + 1));
    rest = permutation(restA);

    if(rest.length === 0){
      res.push([a[i]]);
    } else {
      for(let j = 0; j < rest.length; j++){
        console.log(rest);
        console.log(a);
        console.log();
        res.push([a[i]].concat(rest[j]));
      }
    }
  }
  return res;
}

console.log(permutation([1,2,3]));
// => [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
