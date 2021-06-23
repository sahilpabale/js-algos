// Count unique numbers

// input: [1,1,2,2,3,4,4,5,6,7,8]

// output: 8

function countUniqueNumbers(numArray) {
  if (numArray.length > 0) {
    let i = 0;

    for (let j = 1; j < numArray.length; j++) {
      if (numArray[i] !== numArray[j]) {
        i++;
        numArray[i] = numArray[j];
      }
    }

    return i + 1;
  } else {
    return 0;
  }
}

let arr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8];

console.log(countUniqueNumbers(arr));
