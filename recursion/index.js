let arr = [1,2,3,4,5];

function arrayLength(array) {
	if(array.length === 0) {
		return 0;
	} else {
		array.shift();
		return 1 + arrayLength(array);
	}
}

console.log(arrayLength(arr));