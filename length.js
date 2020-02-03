let f = (acc, x) => acc + 1;

// finds the length of an array
module.exports = length (a) => a.reduce(f, 0);
