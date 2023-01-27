// add whatever parameters you deem necessary - good luck!



function separate(array){
  const cats = [];
  const water = [];
  const dogs = [];

  for (const element of array) {
    if (element === 'cat') cats.push(element)
    if (element === 'water') water.push(element)
    if (element === 'dog') dogs.push(element)
  }



  return cats.concat(water).concat(dogs)

}


console.log(separate(['dog','cat','water']))