// add whatever parameters you deem necessary - good luck!

//in: array
//out: the max value in the array
//edge: empty array, single value array?

function max(array) {
  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    let element = array[i];

    if (element > result) result = element
  }

  return result
}
