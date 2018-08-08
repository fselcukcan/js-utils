module.exports = function slice(a, s, e) {
    if (e > a.length) { e = a.length; }
    let sliced_a = [];
    if (e < s) {return sliced_a;}
    for(let i = s; i < e; i++) {
	sliced_a.push(a[i]);
    }
    return sliced_a;
};
