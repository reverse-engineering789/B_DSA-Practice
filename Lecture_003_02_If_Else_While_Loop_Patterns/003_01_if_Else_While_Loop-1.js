// const n = 10
// let string = ''

// for (let i = 1; i <= 10; i++){
//    string = string + i + ' '
// }
// console.log(string)

// // Output:
// // 1 2 3 4 5 6 7 8 9 10 

// // ------------------------------------------------------

// // sum of 100 numbers: 

// const n = 100
// let sum = 0

// for (let i = 1; i <= 100; i++){
//      sum = sum + i
// }
// console.log(sum)

// // Output:
// // 5050



//--------------------------------------------------


const n  = 14

for (let i = 1; i <= n; i++){
    if (n % i === 0){
        console.log(`not prime for ${i}`)
    }else{
        console.log(`Prime for ${i}`)
    }
}


// Output:
// not prime for 1
// not prime for 2
// Prime for 3
// Prime for 4
// Prime for 5
// Prime for 6
// not prime for 7
// Prime for 8
// Prime for 9
// Prime for 10
// Prime for 11
// Prime for 12
// Prime for 13
// not prime for 14