// gives an array of arrays of the boundary positions of the elemensts of an array as if they were in a join()ed string
const f = (x, i, a) => [a.slice(0, i).join("").length + i, a.slice(0,i).join("").length + i + x.length - 1];

const posit = (a) => a.map(f);

export default posit;
