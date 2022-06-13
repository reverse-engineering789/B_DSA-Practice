const n = 5 

string = ''

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n-i; j++){
        string = string + String.fromCharCode(j + 64)
    }
    string = string + '\n'
}

console.log(string)


// Output:
// ABCD
// ABC
// AB
// A
