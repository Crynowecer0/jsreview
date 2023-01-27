// add whatever parameters you deem necessary - good luck!

//in - an object
//out - is an array of the KEYS in the object
//edge - none?

function keys(obj){
  //declare variable result and init to empty array
  const result = [];

  //loop over the keys in the object
  for (const key in obj) {
    result.push(key)
  }
  //push the key to the array

  //return the result array
  return result


}