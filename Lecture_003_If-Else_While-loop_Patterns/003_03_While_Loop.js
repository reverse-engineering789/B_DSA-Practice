// number = 1

// while (number <= 10){
//       console.log(number)
//       number++
// }


// // Output:
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10


// // -------------------------------



// let number = 100

// let i = 0
// while (i <= 5){
//     number = number + i
//     i++
// }

// console.log(number)

// // Output:
// // 115

// //-------------------------------



// let n = 100 
// let sum = 0

// let i = 1 
// while ( i <= n){
//    sum = sum + i
//    i++   
// }


// console.log('The value of sum is: '+ sum)



// // Output:
// // The value of sum is: 5050



// //--------------------------------------------




let isPrime = (number) => {
    let i = 2

    while( i < number){
    if (number % i === 0){
        console.log(i + '  is not a Prime number')
    }else{
        console.log(i + ' is a Prime number') 
    }
     i++
}
}


isPrime(14)


// Output:
// 2  is not a Prime number
// 3 is a Prime number
// 4 is a Prime number
// 5 is a Prime number
// 6 is a Prime number
// 7  is not a Prime number
// 8 is a Prime number
// 9 is a Prime number
// 10 is a Prime number
// 11 is a Prime number
// 12 is a Prime number
// 13 is a Prime number



//----------------------------------------------------