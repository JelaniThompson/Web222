// The data sent to the data link layer from the network layer
let array = [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0];
const frameVal = " 0 1 1 1 1 1 1 0 ";
let counter = 0;

console.log("Before stuffing: " + array.join(' ') + " -- " + array.length + " characters");

for (let index = 0; index < array.length; index++) {
	if (array[index] == 1) { counter++; }
	else { counter = 0; }

	// Insert 0 in front of current position if counter reaches 5
	if (counter == 5) { array.splice(index, 0, 0); }
}

console.log("After stuffing: " + array.join(' ') + " -- " + array.length + " characters");

console.log("After framing: " + frameVal + array.join(' ') + frameVal);
