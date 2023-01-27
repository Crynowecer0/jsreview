// add whatever parameters you deem necessary - good luck!

//in - an object with numeric keys
//out - an array containing the lowest key and the highest key in that order
//edge - non-numeric keys, empty object


function minMaxKeyInObject(object){

const arrOfKey = []

for (const key in object) {
arrOfKey.push(key)
}

return [Math.min(...arrOfKey), Math.max(...arrOfKey)]

}

console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' })); //[1,10]