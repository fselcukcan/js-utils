// Implements JavaScript slice() function in an imperative way

export default function slice(a, s = 0, e = a.length) {
    if (e > a.length) { e = a.length; }
    let sliced_a = [];
    if (e < s) {return sliced_a;}
    for(let i = s; i < e; i++) {
	sliced_a.push(a[i]);
    }
    return sliced_a;
};

/*
function slice(a, s = 0, e = a.length) {
    return a.filter((item, i) => i >= s && i < e);
}

function slice(a, s = 0, e = a.length) {
    return a.reduce((acc, item, i) => i >= s && i < e ? acc.concat(item) : acc, []);
}
*/
