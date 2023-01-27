// add whatever parameters you deem necessary - good luck!

//in - array, number
//out - number of times target number appears in the array => counting
//edge - invalid/missing inputs


function countValues(array, targetValue){

//declare variable count and init to 0
let count = 0;

//loop over the input array
for (let i = 0; i < array.length; i++) {
let element = array[i];
if (element === targetValue) count++
}
  //check if current element is equal to target value, if so incremnt the count

//return count
return count;

}