// gives an array of arrays of the boundary positions of the elemensts of an array as if they were in a join()ed string
let f = (x, i, a) => [a.slice(0, i).join("").length + i, a.slice(0,i).join("").length + i + x.length - 1];

let posit = (a) => a.map(f);

module.exports = posit;
