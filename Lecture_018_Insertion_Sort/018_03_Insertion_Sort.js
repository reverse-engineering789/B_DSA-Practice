
// function insertionSort (arr) {
//     for (let i = 1; i < arr.length; i++){
//         let currentVal = arr[i]
//         let j = i - 1
//         for (; j >= 0 && arr[j] > currentVal; j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal
//     }
//     return arr
// }

// console.log(insertionSort([2,1,9, 76, 4]))

// // Output:
// // [ 1, 2, 4, 9, 76 ]



// // ----------------------------------------


// function insertionSort (arr) {
//     for (let i = 1; i < arr.length; i++){
//         let currentVal = arr[i]
//         for (let j = i - 1; j >=0 && arr[j] > currentVal; j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal
//     }
//     return currentVal
// }


//----------------------------------------------------



// const BubbbleSort = (arr) => {
//        for (let i = 0; i < arr.length; i++){
//            for (let j = i+1; j < arr.length; j++){
//                   if (arr[i] > arr[j]) {
//                        let temp = arr[i]
//                        arr[i] = arr[j]
//                        arr[j] = temp
//                   }
//            }
//        }
//        return arr
// }

// console.log(BubbbleSort([2,12,4,16,6,18, 20]))


// // Output:
// // [
// //     2,  4,  6, 12,
// //    16, 18, 20
// //  ]


// //----------------------------------------------------------------------



// function bubbleSort(arr){

//         for (let j = 0; j < arr.length; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 // SWAP 
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//         return arr
// }

// console.log(bubbleSort([37,45,29,8]))


//------------------------------------------------------------------



const BubbbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(BubbbleSort([2,8,4,10,6,12,18,14]))

// Output:
// [
//     2,  4,  6,  8,
//    10, 12, 14, 18 
//  ]
