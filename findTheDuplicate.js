// add whatever parameters you deem necessary - good luck!

//in: array of numbers
//output is the first duplicated number OR undefined
//edge cases: none that I can think of

function findTheDuplicate(array){

for (let i = 0; i < array.length; i++) {
if (array.slice(i+1).includes(array[i])) return array[i]
}
return undefined

}