export const occur = (a, x) => a.reduce((acc, item) => item === x ? acc + 1 : acc, 0);

/* export const occur = (a, x, test = (x, y) => x === y) => a.reduce((acc, item) => test(item, x) ? acc + 1 : acc, 0); */
