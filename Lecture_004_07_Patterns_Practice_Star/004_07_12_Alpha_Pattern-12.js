const n = 5 
string = ''

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
         string = string + String.fromCharCode(j + 64)
    }
    string = string + '\n'
}

for (let i = 1; i < n; i++){
     for (let k = 1; k <= (n-i); k++){
         string = string + String.fromCharCode(k + 64)
     }
     string = string + '\n'
}
console.log(string)


// Output:
// A
// AB
// ABC
// ABCD
// ABCDE
// ABCD
// ABC
// AB
// A
