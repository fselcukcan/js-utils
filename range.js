function range(start, end, deltaAbsolute = 1) {
	return new Array(Math.abs(Math.floor((end - start) / deltaAbsolute)))
    		.fill(start)
    		.map((x, i) => x + (i * Math.abs(deltaAbsolute) * ((end -start) / (Math.abs(end - start)))))
}
