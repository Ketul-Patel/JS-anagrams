// given an array of words we want to return a hashtable (js object) where the keys are the words and the values are the number of anagrams that appear in the array

function compare(string1, string2) {
	// compare the two strings
	// take both strings and split, sort, join (this gives us 2 sorted strings which we then compare)
	// need to create sorted1 & sorted2
	var sorted1 = string1.split('').sort().join();
	var sorted2 = string2.split('').sort().join();
	if(sorted1 == sorted2) {
		return true;
	}
	else {
		return false;
	}
}

console.log(compare("dgo", "act"));

var test = ["dog", "act", "god", "dgo", "tac"];

function anagrams(array) {
	var anagrams = {};
	// loop through the array and compare strings
	for(var i = 0; i < array.length; i++) {
		// we are looping through the array so array[i] = the word that we are looking at currently
		for(var j = 0; j < array.length; j++) {
			// we need to compare array[i] to array[j] using the compare function above and add the same ones to the anagrams hash table (js object)
			// if theyre equal don't do anything
			if(i != j) {
				// if the words are anagrams then lets increment stuff
				if(compare(array[i], array[j])) {
					// if the key already exists lets add 1
					if(anagrams[array[i]]) {
						anagrams[array[i]] += 1
					} else { // if key doesn't exist lets set it to 1
						anagrams[array[i]] = 1
					}
				}
			}
		}
	}
	return anagrams;
}
//console.log(anagrams(test))


function anagrams_map(arr) {
	// need to create return object
	var returnobj = {};
	// loop through the array
	for(var i = 0; i < arr.length; i++) {
		// keep track of current word sorted alpha
		var word = arr[i].split('').sort().join();
		if(returnobj[word] != undefined) {
			returnobj[word] += 1;
		} else {
			returnobj[word] = 0;
		}
	}
	return returnobj;
}
console.log(anagrams_map(test))
