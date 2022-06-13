const n = 5

let string = ''

for (let i = 1; i <= n; i++){
   for (let j = 1; j <= i; j++){
        string = string + String.fromCharCode(j + 64) + ' ' 
    }
    string = string + '\n'
}
console.log(string)

// Output:
// A 
// A B
// A B C
// A B C D
// A B C D E