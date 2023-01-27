// add whatever parameters you deem necessary - good luck!

//in - object
//out - array of the VALUES
//edge - invalid inputs/none

function values(obj) {
  const result = [];

  for (const key in obj) {
    result.push(obj[key]);
  }

  return result;
}
