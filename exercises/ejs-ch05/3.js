// Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

function every(array, fn) {
  const array1 = array.filter(fn);
  if (array1.length === array.length) return true;
  return false;
}

function every(array, fn) {
  return !array.some(el => !fn(el));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

// Other solution
// function every(array, predicate) {
//   for (let element of array) {
//     if (!predicate(element)) return false;
//   }
//   return true;
// }

// function every2(array, predicate) {
//   return !array.some(element => !predicate(element));
// }