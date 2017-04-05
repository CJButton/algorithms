


function fibs(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let seq = fibs(num - 1);
  seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
  return seq;
}

// console.log(fibs(7));

function palindrome(string) {
  if (string.length === 1) return true;

  let right = string.length - 1;
  for (let left = 0; left < string.length; left ++) {
    if (string[left] !== string[right]) {
      return false;
    }
    right -= 1;
  }

  return true;

}
// console.log(palindrome("dog"));
// console.log(palindrome("abba"));
// console.log(palindrome("aaaaaabbaaaaaa"));


// be wary when using foreach, as a return there will not stop there
// entire function, but rather just the forEach loop
function valid_ip(ip) {

  let splitIp = ip.split(".");
  if (splitIp.length !== 4) return false;


  for (let i = 0; i < splitIp.length; i++) {
    if (typeof(parseInt(splitIp[i])) !== "number") return false;

    if (parseInt(splitIp[i]) > 255 || parseInt(splitIp[i] < 0)) {
      return false;
    }
  }
  return true;

}
// console.log(valid_ip("255.255.255.255"));
// console.log(valid_ip("255.255.255"));
// console.log(valid_ip("256.255.255.256"));

function shuffle(arr) {
  if (arr.length < 2) return arr;

  let jumbled = [];
  let arrSize = arr.length

  for (let i = arr.length; i > 0; i--) {

    let rand = Math.floor(Math.random() * arr.length);
    jumbled.push(arr.splice(rand, 1)[0]);

  }
  return jumbled;

}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
