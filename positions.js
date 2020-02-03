// gives an array of arrays of the boundary positions of the elemensts of an array as if they were in a join()ed string
// same as posit.js, only imperative
export default function positions(a) {
    let pos = [];
    for(let i = 0; i < a.length; i ++) {
	// calculate the length of prev elements in each iter
	let temp_a = a.slice(0, i);
	let temp_a_length = 0;
	for(let j = 0; j < temp_a.length; j++) {
	    temp_a_length += temp_a[j].length;
	}
	// add the commas
	temp_a_length += i;
	let start = temp_a_length;
	let end = start + a[i].length -1;
	pos.push([start, end]);
    }
    return pos;
};
