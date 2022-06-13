// My Code: 

const n = 5 

let string = ''

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i ; j++){
        string = string + String.fromCharCode((i) + 64)
    }
    string = string + '\n'
}
console.log(string)

// Output:
// A
// BB
// CCC
// DDDD
// EEEEE