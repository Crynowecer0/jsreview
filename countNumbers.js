// add whatever parameters you deem necessary - good luck!

//in - an arraay of strings
//out - a count of the number of strings that can be converted into a number
//edge -


function countNumbers(array){

  //declare a variable to keep a running count of the valid numbers
  let count = 0;

  //loop over the input array
  array.forEach((number)=>{
//run a teast on each element to see if the element can be a valid number
//key snippet for evaluating valid numbers and excluding NaN from a list of strings
console.log(Number.isNaN(Number.parseInt(number)))
// console.log((Number.parseInt(number) && !Number.isNaN(number)));
if (Number.parseInt(number) && !Number.isNaN(Number.parseInt(number))) count++

  })



  //return our count
  return count

}

console.log(countNumbers(['4','1','0','NaN']));