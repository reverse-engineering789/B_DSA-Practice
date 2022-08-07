// not working for the test case 
// const array1 = [10,6,4,8,2]
const array = (arr) => {
    for (let i = 0; i < arr.length-1; i++){
        // let start = 0
        // let end = arr.length - 1

        if (arr[i] > arr[i+1]){
            let temp  = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            // console.log(arr)
        }
    }
   return arr
}
const array2 = [10,6,4,8,2]
const array1 = [10,6,4,8,2]
console.log(array(array1))
console.log(array(array2))

// Output:
// [ 2, 4, 6, 8, 10 ]




// ---------------------------------------------------------




// const array = (arr) => {
//     for (let i = 0; i < arr.length-1; i++){
//         // let start = 0
//         // let end = arr.length - 1

//         if (arr[i] > arr[i+1]){
//             let temp  = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             console.log(arr)
//         }
//     }
// //    return arr
// }

// const array1 = [10,6,4,8,2]
// console.log(array(array1))



// Output:
// [ 6, 10, 4, 8, 2 ]
// [ 6, 4, 10, 8, 2 ]
// [ 6, 4, 8, 10, 2 ]
// [ 6, 4, 8, 2, 10 ]
// undefined



// [ 6, 4, 10, 8, 2 ]
// [ 6, 4, 8, 10, 2 ]
// [ 6, 4, 8, 2, 10 ]
// undefined
// [ 6, 10, 4, 8, 2 ]
// [ 6, 4, 10, 8, 2 ]
// [ 6, 4, 8, 10, 2 ]
// [ 6, 4, 8, 2, 10 ]
// undefined