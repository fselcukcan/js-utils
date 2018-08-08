let f = (x, i, a) => [a.slice(0, i).join("").length + i, a.slice(0,i).join("").length + i + x.length - 1];

let g = (a) => a.map(f);

module.exports = {f, g};
