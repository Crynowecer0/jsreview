// add whatever parameters you deem necessary - good luck!

//given a string and an integer, return a new string that is the input string repeated integer number of times
//repeat(cat, 3) => catcatcat

function repeat(word, number) {
  //declare a variable results, init to empty string
  let results = "";
  //set up a loop, looping up to number
  for (let i = 0; i < number; i++) {
    //on each iteration of the loop, we are going to concat the word to variable results
    results += word;
  }
  // console.log("results after loop runs", results);
  return results;

  //return results
}

repeat('cat', 3) //catcatcat
