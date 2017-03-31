


function fibs(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let seq = fibs(num - 1);
  seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
  return seq;
}

console.log(fibs(7));
