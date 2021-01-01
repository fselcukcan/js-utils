export default function member(item, arr, rest = {}) {
    return memberAux(item, arr, rest);
}

function memberAux(item, arr, {key = x => x, test = (x, y) => x === y}) {
  return arr.some(arrElm => test(item, key(arrElm)));
}
