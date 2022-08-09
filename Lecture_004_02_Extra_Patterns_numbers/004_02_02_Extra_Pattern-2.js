

// // 4321
// // 321
// // 21
// // 1


// const n = 4

// let string = ''

// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= n-i+1; j++){
//         string += n - j - i + 2
//     }
//     string = string + '\n'
// }

// console.log(string)


// // -------------------------------------------



const n = 5
string = ''

for(let i = 1; i <= n; i++){
    for (let j = 1; j <= n-i+1; j++){
        string = string + (n-i-j+2) + ' '
    }
    string = string + '\n'
}

console.log(string)


// Output:
// 5 4 3 2 1 
// 4 3 2 1
// 3 2 1
// 2 1
// 1