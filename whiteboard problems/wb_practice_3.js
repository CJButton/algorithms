

// write our own map function

Array.prototype.myMap = function(func) {

  let map = [];

  for (let i = 0; i < this.length; i++) {
    map.push(func(this[i]));
  }
  console.log(map);
  return map;

}


var numbers = [1, 5, 10, 15];
var roots = numbers.myMap(function(x) {
   return x * 2;
});
