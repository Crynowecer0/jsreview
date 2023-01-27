// add whatever parameters you deem necessary - good luck!

//in: array
//out: min value in array
//edge: invalid types, empty array?

function min(array){
//theoretical edge cases: empty array, no input
let result = array[0];

for (let i = 0; i < array.length; i++) {
  let element = array[i];

  if (element < result) result = element;
}

return result

}