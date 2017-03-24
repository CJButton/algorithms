


function get_digits(num) {
  let digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digits;

}

function digital_root(num) {
  let digits = get_digits(num);

  let root = digits.reduce(function(acc, num) {
    return acc + num;
  })

  if (root < 10) {
    return root;
  } else {
    digital_root(root);
  }


}
digital_root(12345);
