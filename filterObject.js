function filterObject(o, filterFunc, initialAccumulator = {}) {
    return Object.entries(o)
        .filter(([key, value], indexInEntriesArray, entriesArray) => filterFunc(key, value, indexInEntriesArray, entriesArray))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), initialAccumulator);

}
// filterFunc(key, value, indexInEntriesArray, entriesArray)

// Examples:
// const object = {a: 5, b: 6}
// filter with respect to property key
// filterObject(object, (key, value) => key !== a) returns {b :6}
// filter wrt value
// filterObject(object, (key, value) => key < 6) returns {a :5}
