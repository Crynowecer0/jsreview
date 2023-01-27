// add whatever parameters you deem necessary - good luck!

//in - two numbers, x and n, both are positive
//out - an array containing the first N multiples of X
//edge - negative N, missing inputs?

/*return the first N multiples of X, X is positive */
function multiples(x, n){
const result = [];

for (let i = 1; i <= n; i++) {
  result.push(i * x);
}
return result
}