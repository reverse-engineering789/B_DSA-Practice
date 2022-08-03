const n  = 5; 
string = ''
let count = 1

for (let i = 1; i <= n; i++){
  for (let j = 1; j <= i; j++){ 
    string = string + String.fromCharCode(count + 64)
    count++
  }
 string = string + ' '
}

console.log(string)


// Output:
// A BC DEF GHIJ KLMNO 