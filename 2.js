// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function bracketIndex(s) {
  let brackets = [];

  s.split("").forEach(function(el, i) {
    if(el === "[" || el === "]") {
      brackets.push(i);
    }
  })

  return brackets;
}

function decodedString(s, start, index, product, end) {
  const initial = s.slice(0, start - 1);
  const repeatedString = s.slice(index + 1, end).repeat(product);
  const endString = s.slice(end + 1, s.length);
  return initial + repeatedString + endString;
}

function decode(s) {
  const brackets = bracketIndex(s);
  const index = brackets[(brackets.length / 2) - 1];
  const end = brackets[brackets.length / 2];

  let isProduct = false;
  let start = 0;
  let product = 0;

  while(!isProduct) {
    product = s.slice(start, index);
    start += 1;

    if(!isNaN(product)) {
      isProduct = true;
    }
  }

  return decodedString(s, start, index, product, end);
}

function decodeString(s) {
  let brackets = bracketIndex(s);
  const num = (brackets.length) / 2;
  let newString = "";

  for (let i = 0; i < num; i++) {
    if (newString === "") {
      newString = decode(s);
    } else {
      newString = decode(newString);
    }
  }

  return newString;
}
