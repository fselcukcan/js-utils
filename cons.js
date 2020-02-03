export default function cons(e, a) {
    let temp_a = a.map(x=>x);
    temp_a.unshift(e);
    return temp_a;
};
