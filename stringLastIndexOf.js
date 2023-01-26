// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(word, char){

//set an itermediate variable equal to -1, name it results
let results = -1;

//iterate over the input word
for (let i = 0; i < word.length; i++) {
  let currentChar = word[i];

  if (currentChar === char){
    results = i
  }
  //we are going to check if each character of word is equal to the input character

  //if it is, set results equal to the index at which it appeared.
}
return results;


  //return results
}