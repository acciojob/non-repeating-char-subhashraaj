function firstNonRepeatedChar(str) {
	const charCount = {};
    for (const str of inputString) {
        charCount[str] = (charCount[str] || 0) + 1;
    }
    for (const str of inputString) {
        if (charCount[str] === 1) {
            return str;
        }
    }
    return null;
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
