export default function member(item, arr, rest = {}) {
    return memberAux(item, arr, rest);
}

function memberAux(item, arr, {key = x => x, test = (item, y) => item === y}) {
  return arr.some(arrElm => test(item, key(arrElm)));
}
