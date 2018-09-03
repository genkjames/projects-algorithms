// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let triangle = '';

for (let i = 0; i < 7; i += 1) {
  triangle += '#';
  console.log(triangle);
}

// Other solutions: 
// for (let line = "#"; line.length < 8; line += "#") console.log(line);