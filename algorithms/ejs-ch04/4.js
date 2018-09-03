// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual. 

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

function deepEqual(val1, val2) {
  if (val1 === val2) return true;
  else if (val1 === null || val2 === null) return false;
  else if (typeof val1 === typeof val2 && typeof val1 === 'object') {
    let keys1 = Object.keys(val1), keys2 = Object.keys(val2);
    if ( keys1.length !== keys2.length) return false;
    for (let i of keys1) {
      if (!deepEqual(val1[i], val2[i])) return false;
    }
    return true;
  } else return false;
}

console.log(deepEqual({val: 1, an: 9}, {val: 1}));

// Other solution
// function deepEqual(a, b) {
//   if (a === b) return true;
  
//   if (a == null || typeof a != "object" ||
//       b == null || typeof b != "object") return false;

//   let keysA = Object.keys(a), keysB = Object.keys(b);

//   if (keysA.length != keysB.length) return false;

//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//   }

//   return true;
// }