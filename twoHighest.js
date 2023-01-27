// add whatever parameters you deem necessary - good luck!

//in - array of numbers
//out - the highest and 2nd highest number in the argument array, contained within an array
//edge -

//get the two largest numbers from an array

function twoHighest(array) {
  //declare two variables, max and second max, init both to be the first number of the array
  let highest = -Infinity
  let secondHighest = -Infinity

  array.forEach((number)=>{
if (number > highest) {
  //need to remember this - was skipping values
  secondHighest = highest;
  highest = number;
} else if (number > secondHighest) {
secondHighest = number;
}
  })

return [secondHighest, highest]
}

console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4]));
