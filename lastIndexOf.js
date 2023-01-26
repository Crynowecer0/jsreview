// add whatever parameters you deem necessary - good luck!

//inputs: array, target number
//outputs: either the last index at which target number appears in the array OR -1
//edge: none

function lastIndexOf(array, targetNum) {
  //declare intermediary variable result and init to -1
  let result = -1;
  //loop over our input array
  for (let i = 0; i < array.length; i++) {
    //check if the current element is equal to target num
    let element = array[i];
    //if it is, set result equal to the index at which target num is appearing
    if (element === targetNum) result = i;
  }

  //return result
  return result;
}

console.log(lastIndexOf([1, 2, 3, 1], 1)); //3
console.log(lastIndexOf([0, 2, 3, 0], 1)); //-1
