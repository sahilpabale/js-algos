// checks whether a number is prime or not

// input: Number (7)
// output: true/false (depending on number)

function isPrime(num) {
  let counter = 2;
  let flag = false;

  if (num == 1) return true;

  while (counter < num) {
    if (num % counter == 0) {
      return false;
    }
    counter++;
    flag = true;
  }

  if (flag) return true;
}

console.log(isPrime(parseInt(process.argv[2])));
