// add whatever parameters you deem necessary - good luck!

//in - array
//out - sum of the SQUARE of all even numbers in array
//edge

function squareEvenNumbers(array){

  let sum = 0;

  array.forEach((number)=>{
if (number % 2 === 0) sum += number*number
  })

  return sum

}