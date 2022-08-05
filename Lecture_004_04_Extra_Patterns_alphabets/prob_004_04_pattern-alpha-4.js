
const n = 4
string = ''
for (let i = 1; i <= n; i++){
  for (let j = 1; j <= n-i; j++){
    string = string + String.fromCharCode(j + 64)
  }
  string = string + '\n'
}

console.log(string)

// Output:
// getting only 3 rows instead of 4 rows (n = 4)

// ABC
// AB
// A
