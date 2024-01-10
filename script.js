function firstNonRepeatedChar(str) {
	const charCount = {};
    for (const char of inputString) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of inputString) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
