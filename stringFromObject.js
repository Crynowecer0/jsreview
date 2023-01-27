// add whatever parameters you deem necessary - good luck!

//in - an object
//out - a string of key value pairs
//edge - empty object/invalid inputs

//stringify an object, like JSON stringify but without the brackets
function stringFromObject(object){

  //declare an empty string, result
  let result = []
  //loop over the object
  for (const key in object) {
    let tempStr = `${key} = ${object[key]}`
    result.push(tempStr)
  }

  result = result.join(', ')
    //for each key value pair, concat a string in the form of key = value, to the result string

  //return all but the final character of the results string
  return result;

}