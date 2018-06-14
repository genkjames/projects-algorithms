// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function objectifyWord(s) {
  const word = {};
  let num = 0;

  s.split("").forEach(function(el, i) {
    if(Object.keys(word).includes(el)) {
      word[el] += 1;
    } else {
      word[el] = 1;
    }
  })

  return word;
}

function sortByStrings(s, t) {
  let newString = "";
  const object_string = objectifyWord(s);

  t.split("").forEach(function(el, i) {
    newString += el.repeat(object_string[el]);
  })

  return newString;
}
