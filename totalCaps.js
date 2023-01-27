// add whatever parameters you deem necessary - good luck!

//in - array of strings
//out - the sum of the number of capital letters in each array of strings
//edge - non-alphabetic characters

function totalCaps(array){
let count = 0;

for (const string of array) {
  for (const char of string) {
    if (char >= "A" && char <= "Z") count++
  }
}
return count
}