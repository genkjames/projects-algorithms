// For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.

// car and cat
// pop and prop
// ferret, ferry, and ferrari
// Any word ending in ious
// A whitespace character followed by a period, comma, colon, or semicolon
// A word longer than six letters
// A word without the letter e (or E);

// console.log(/ca\w/.test('cat'));
// console.log(/ca\w/.test('car'));
// console.log(/p\w?op/.test('pop'));
// console.log(/p\w?op/.test('prop'));
// console.log(/ferr\w+/.test('ferret'));
// console.log(/ferr\w+/.test('ferry'));
// console.log(/ferr\w+/.test('ferrari'));
// console.log(/ious$/.test('studious'));
// console.log(/ious$/.test('contagious'));
// console.log(/\s(.|,|;|:)/.test(' ,'));
// console.log(/\s(.|,|;|:)/.test(' .'));
// console.log(/\s(.|,|;|:)/.test(' ;'));
// console.log(/\s(.|,|;|:)/.test(' :'));
// console.log(/\w{6}/.test('sixtyl'));
// console.log(/\w{6}/.test('length'));
// console.log(/[^e]/.test('something'));
// console.log(/[^(e|E)]/.test('somthing'));

verify(/ca(\w){1,2}\b/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/p[r]?op/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,;:]/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\w{7}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[^\We]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}