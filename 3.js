// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function computeDenominations(amount, denominations, el, i) {
  let denomination = Array(i).fill(el);
  let subTotal = el * i;
  let remainder = amount - subTotal;

  if (denominations.includes(remainder)) {
    denomination.push(remainder);
  }
  let key = denomination.sort().join("");
  return {d: denomination.sort(), key};
}

function denominationsObject(obj, val) {
  obj[val.key] = true;
  return obj;
}

function changePossibilities(amount, denominations) {
  const possibilities = [];
  let denomination = [];
  let obj = {};

  denominations.forEach(function(el, i) {
    if (el < amount) {
      let quotient = amount / el;

      for (let i = 1; i < quotient; i++) {
        denomination = computeDenominations(amount, denominations, el, i);
        if (!obj[denomination.key]) {
          possibilities.push(denomination.d);
        }
        obj = denominationsObject(obj, denomination);
      }
    }
  })

  return possibilities.length;
}
