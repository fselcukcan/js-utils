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
