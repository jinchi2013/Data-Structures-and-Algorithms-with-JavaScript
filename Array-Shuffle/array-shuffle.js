// Fisrt with complexity O(n^2);

function shuffle_n2 (array){
	var copy = [];
	var n = array.length,
	var i;

	// while there remain elements to shuffle
	while(n) {
		// Pick a remaining element...
		i = Math.floor(Math.random() * n--);

		// And move it to the new array.
		copy.push(array.splice(i, 1)[0]);
	}

	return copy;
}

// Second with complexity O(n);

function shuffle(array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle
	while(m){
		// Pick a remaining element
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element;
		t = array[m]; // use t to save the last element at m 
		array[m] = array[i]; // save this random element at i to the end of array[m]
		array[i] = t; // put the temp
	}

	return array;
}