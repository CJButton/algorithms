

// write our own map function

Array.prototype.myMap = function(func) {

  let map = [];

  for (let i = 0; i < this.length; i++) {
    map.push(func(this[i]));
  }
  return map;
}


// var numbers = [1, 5, 10, 15];
// var roots = numbers.myMap(function(x) {
//    return x * 2;
// });
function foldingCipher(str) {

  let top = [];
  let bottom = [];

  for (let i = "a".charCodeAt(); i < "z".charCodeAt() + 1; i++) {
    if ( i < ("z".charCodeAt() - 12)) {
      top.push(String.fromCharCode(i));
    } else {
      bottom.unshift(String.fromCharCode(i));
    }
  }

  let ciphered = [];
  str.split("").forEach((letter) => {
    if (letter.charCodeAt() < "z".charCodeAt() - 13) {
      letterIdx = top.indexOf(letter.toLowerCase());
      ciphered.push(bottom[letterIdx]);
    } else {
      letterIdx = bottom.indexOf(letter.toLowerCase());
      ciphered.push(top[letterIdx]);
    }
  });
  return ciphered.join("");

}

console.log(foldingCipher("abcdef"));
