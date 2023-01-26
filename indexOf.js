// add whatever parameters you deem necessary - good luck!

//input: array (of numbers?), target number (int)
//output: the FIRST index at which the target number appears OR -1 if the target number does not appear
//edgecases: missing inputs,

function indexOf(array, targetNum){
  //iterate over the input array
  for (let i = 0; i < array.length; i++) {
  //as we access the individual values of the array, check if the value is equal to targetNum
  let element = array[i];
  if (element === targetNum) return i;
    //if it is, return the index

  }


  //return -1
  return -1

}



//tests
console.log(indexOf([1,2,3]), 1) //true
console.log(indexOf([3,4,5]), 1) //false