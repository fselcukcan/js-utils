const f = (acc, x) => acc + 1;

// finds the length of an array
export default length (a) => a.reduce(f, 0);
