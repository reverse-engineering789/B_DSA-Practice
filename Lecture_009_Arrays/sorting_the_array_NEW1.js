
// const sortArray = (arr) => {
//     for (let i = 0; i <= array.length - 1; i++) {
//         for (let j = i + 1; j <= array.length - 1; j++) {

//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//   return arr
// }

// const array = [2, 8, 4, 6, 10]
// const array2 = [10,6,4,8,2]
// console.log(sortArray(array))
// console.log(sortArray(array2))
// // Output:
// // [ 2, 4, 6, 8, 10 ]
// // [ 2, 4, 6, 8, 10 ]



// //------------------------------------------------------
// // not working for the test case 
// // const array1 = [10,6,4,8,2]
// const array = (arr) => {
//     for (let i = 0; i < arr.length-1; i++){
//         // let start = 0
//         // let end = arr.length - 1



//         if (arr[i] > arr[i+1]){
//             let temp  = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             // console.log(arr)
//         }
//     }
//    return arr
// }
// const array2 = [10,6,4,8,2]
// const array1 = [10,6,4,8,2]
// console.log(array(array1))
// console.log(array(array2))

// // Output:
// // [ 2, 4, 6, 8, 10 ]




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


// // -----------------------------------------------------




let sorting = (array) => {
    for (let i = 0; i <= array.length-1; i++){
       for (let j = i+1; j <= array.length-1; j++){
        if (array[i] > array[j]){
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
       }
    }
    return array
}

const array1 = [2, 8, 4, 6, 10]
const array2 = [10,6,4,8,2]
console.log(sorting(array1))
console.log(sorting(array2))
// Output:
// [ 2, 4, 6, 8, 10 ]
// [ 2, 4, 6, 8, 10 ]