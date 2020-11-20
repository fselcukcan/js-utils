// map an object with a filteringFunction(key, value, indexInEntriesArray, entriesArray) that returns a new object that you want to map to
export function mapObject(object, filteringFunction, initialAccumulator = {}) {
    return Object.entries(object)
        .map(([key, value], indexInEntriesArray, entriesArray) => filteringFunction(key, value, indexInEntriesArray, entriesArray))
        .reduce((acc, o) => ({ ...acc, ...o }), initialAccumulator);
}
// filterFunc(key, value, indexInEntriesArray, entriesArray)
// Examples:
// mapObject({a: 2}, (k, v) => ({[k]: v**2})) returns {a: 4} // mapping values
// mapObject({a: 2}, (k, v) => ({[k.toUpperCase()]: v**2})) returns {A: 4} // mapping keys possible as well
// // mapObject({a: 2}, (k, v) => ({[v]: k})) returns {2: "a"} // switching keys and values

/**
// a map funciton in place of standard map. this can be used recursively easier than that woudl be with standard map in which case you would need to not accumulate not recurr and call map inside your funciton.
// will be able to be used by the recurisve friendly version of mapObject
function map(arr, f) {
    if (arr.length === 0) return [];
    else if(typeof(arr[0]) === 'number') return [f(arr[0]), ...g(arr.slice(1), f)]
    else if(Array.isArray(arr[0])) return [g(arr[0], f), ...g(arr.slice(1), f)]
}
*/
