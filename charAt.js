// add whatever parameters you deem necessary - good luck!
function charAt(string, index) {
  //edge:  return empty string if index is > string.length
  if (index > string.length) return "";

  //declare a let equal to an empty string
  let results = "";
  //iterate over the argument string up to the char that exists at the index
  for (let i = 0; i < string.length; i++) {
    //when we get to the index, we are going to set results equal to the character at that index
    let char = string[i];
    if (i === index) {
      results = char;
      return results
    }
  }

  //return results
}
