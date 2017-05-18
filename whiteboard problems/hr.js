


// Arrays: Left Rotation

const arrRotation = (arr, rotate) => {

  let modRotate = rotate % arr.length;

  return arr.slice(modRotate).concat(arr.slice(0, modRotate));

}
console.log(arrRotation([1, 2, 3, 4, 5], -1));




//
