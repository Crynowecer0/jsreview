// add whatever parameters you deem necessary - good luck!

//in - object
//out - array of tuples
//edge - empty input, invalid input (not array??)

//return an array containing a series of sub arrays (tuples?) with each sub array containing one key value pair from the passed in object



function entries(object){

const result = [];

for (const key in object) {
  let tempArr = [key, object[key]]
  result.push(tempArr)
}

return result;

}