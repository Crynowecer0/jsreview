// add whatever parameters you deem necessary - good luck!

//inputs: collection (string, array, or object), a target value, and an index to start at (if the collection is an array/string)

//object case
//check if one of the values stored in the objects keys is equal to the target, and if it is return true, else return false

//non-object case
//iterate over the collection starting at index equal to starting index, checking if each element is equal to the target, if it is we return true

//if both of the above cases complete without a return, we return false.

function includes(collection, target, startingIndex = 0) {

//object case
//if the collection does not have a length value
  //iterate over the keys in the object, checking if the value at the current key is equal to the target
  //if it is, return true
if (!collection.length) {
  for (const key in collection) {
    if (collection[key] === target) return true;
  }
}
//string/array case
//loop over the string/array, starting at the starting index
//check if the current element is equal to the target, if it is, return true
for (let i = startingIndex; i < collection.length; i++) {
let element = collection[i]
if (element === target) return true;
}
//return false
return false;

 }





 console.log(includes([1, 2, 3], 1, 2)) //true
 console.log(includes({'a':1}, 1)) //true
