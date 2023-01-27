// add whatever parameters you deem necessary - good luck!

//in: array, starting(inclusive) index, ending(exclusive) index
//out: a new array consisting of the values from the starting index up the value before the ending index
//edge: if ending is missing or > length of array, return from start through end:

/* slice selections from start (inclusive) to end-1 */
function slice(array, startIndex, endingIndex) {
//edge cases
if (endingIndex > array.length || !endingIndex) endingIndex = array.length;

const result = [];

for (let i = startIndex; i < endingIndex; i++) {
  result.push(array[i])
}
return result;

}

console.log(slice[1,2,3,4,5,6], 2, 3) //3
console.log(slice[1,2,3,4,5,6], 2, 4) //3, 4
