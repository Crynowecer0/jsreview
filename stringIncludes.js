// add whatever parameters you deem necessary - good luck!

function stringIncludes(word, char){
  //loop over the word
  for (let i = 0; i < word.length; i++) {
    let currentChar = word[i];
    if (currentChar === char) return true
  }
  return false;
    //declare an variable equal to the character at the current index of the string
    //if the character is equal to the param char, return true

    //return false

}