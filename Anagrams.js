// Prob 2 - String Anagram
// Inputs: 'hello', 'ellho' -> check if both are anagrams
// Output: true (if both inputs are anagrams)

// Anagram condition comes true, if both strings have same length and same content, be it in different order.

// Algo:
// Check the lengths of inputs
// Check the contents of strings {h:1, e:1, l:2, o:1}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    let mappingObj = {};
    for (let char of str1) {
      mappingObj[char] = (mappingObj[char] || 0) + 1;
    }
    // console.log(mappingObj);

    for (let item of str2) {
      if (!mappingObj[item]) {
        return false;
      }
      mappingObj[item] -= 1;
    }

    return true;
  }
}

console.log(isAnagram("hello", "ellho"));
