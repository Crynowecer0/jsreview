// add whatever parameters you deem necessary - good luck!

//in a string
//out boolean representing if the letters in the string are in an alternating order of vowels and consonants
//edge
function isAlt(string){
let count = 0;

const vowels = ['a', 'e', 'i', 'o', 'u']

for (const char of string) {
  if (vowels.includes(char.toLowerCase())) {
    count--
  } else {
    count++
  }

  if (count > 1 || count < -1) return false
}

return true

}