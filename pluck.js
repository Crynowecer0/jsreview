// add whatever parameters you deem necessary - good luck!

//in - an array of objects
//out - an array containing the value at the given key for each object in the argument array
//edge - i cant think of any off hand

//summary

function pluck(array, key) {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    results.push(object[key])
  }
  return results;
}


console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], 'name')) //