// add whatever parameters you deem necessary - good luck!

function stringIndexOf(word, char){
//declare an intermediary variable call it results, init to -1
// let results = -1;
//loop over the argument word
for (let i = 0; i < word.length; i++) {
  const element = word[i];
  if (element === char) return i
}

return -1
  //test if the current character of word is equal to word
    //if it is, we will set results equal to the current index

//return results variable from earlier
}