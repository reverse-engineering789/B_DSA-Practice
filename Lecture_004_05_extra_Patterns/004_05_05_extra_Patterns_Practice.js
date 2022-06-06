// const n = 3
// let count = 1;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n-i; j++){
//         console.log(' ')
//                }
//         for (let k = 1; k <= 2*i-1; k++){
//         console.log(count)
//         count++
//         }
//         console.log(' ')
//     }



const n = 3 
let count = 1 

for (let i = 1; i <= n; i++){
    for(let j = 1; j <= n-i; j++){
        console.log(' ')
    }
    for (let k = 1; k <= 2*i-1; k++){
        console.log(count)
           count++
    }
    console.log(' ')
}


// Output:

 
// 1


// 2
// 3
// 4

// 5
// 6
// 7
// 8
// 9
