// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

function arrayToList(arr) {
  let list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!list.value) {
      list.value = arr[i];
      list.rest = null;
    } else {
      let lastVal = list.value;
      let lastList = list.rest;
      list.value = arr[i];
      list.rest = {
        value: lastVal,
        rest: lastList
      };
    }
  }
  return list;
}

function listToArray(list, arr = []) {
  arr.push(list.value);
  if (!list.rest) {
    return arr;
  }
  else {
    return listToArray(list.rest, arr);
  }
}

function prepend(el, list) {
  return {
    value: el,
    rest: list
  }
}

function nth(list, num) {
  if (num === 0) return list.value;
  else if (!list.rest) return undefined;
  else return nth(list.rest, --num);
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

// Other solution
// function arrayToList(array) {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = {value: array[i], rest: list};
//   }
//   return list;
// }

// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// function prepend(value, list) {
//   return {value, rest: list};
// }

// function nth(list, n) {
//   if (!list) return undefined;
//   else if (n == 0) return list.value;
//   else return nth(list.rest, n - 1);
// }