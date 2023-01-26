//TODO: come back to this one
function removeFromString(word, startingIndex, charsToRemove) {
//declare a variable named results and init to empty string
let results = '';

//loop over the input string
for (let i = 0; i < word.length; i++) {
//if current index is greater than or equal to starting and less than or equal to starting + chars to remove, do nothign
if (i >= startingIndex && i < (startingIndex + charsToRemove)) continue
results += word[i];
//otherwise, push the character to results
}

return results


//return results

}
