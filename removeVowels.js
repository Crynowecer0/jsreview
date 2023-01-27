// add whatever parameters you deem necessary - good luck!

//in - a string
//out - the input string with the vowels removed
//edge - empty, missing input?

function removeVowels(string) {
  //declare a variable to be returned that will be init to an empty string
  let results = "";

  const vowels = ['a', 'e', 'i', 'o', 'u']
  //iterate over the input string
  for (const char of string) {
    //test if the current character is NOT a vowel, if so concat the current character to the previously declared string
    if (!vowels.includes(char.toLowerCase())) results += char;
  }

  //return the string results
  return results;
}

console.log(removeVowels("abcde")); //bcd
