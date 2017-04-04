


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
//
//
// console.log(palindrome("dog"));
// console.log(palindrome("abba"));
// console.log(palindrome("aaaaaabbaaaaaa"));



function valid_ip(ip) {

  let splitIp = ip.split(".");
  if (splitIp.length !== 4) return false;

  splitIp.forEach((el) => {
    if (typeof(parseInt(el)) !== "number") {
      return false;
    } else if (parseInt(el) < 0 || parseInt(el) > 255) {
      return false;
    }
  });



}
// console.log(valid_ip("255.255.255.255"));
// console.log(valid_ip("255.255.255"));
console.log(valid_ip("256.255.255.256"));
