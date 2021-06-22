// print the prime factors of a number
// input: 12
// output: 2 2 3

function primeFactors(num) {
  let factors = [];
  let div = 2;

  while (num > 2) {
    if (num % div == 0) {
      num /= div;
      factors.push(div);
    } else {
      div++;
    }
  }
  return factors;
}

console.log(primeFactors(parseInt(process.argv[2])));
