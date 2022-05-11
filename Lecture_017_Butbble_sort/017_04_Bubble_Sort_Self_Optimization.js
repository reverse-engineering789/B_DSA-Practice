// function bubbleSort(arr){
//     for (let i = arr.length; i > 0; i--){
//         for (let j = 0; j < i - 1; j++ ){
//             if (arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([37,45,29,8,12,88,-3]))

// // Output:
// // [
// //     -3,  8, 12, 29,
// //     37, 45, 88
// //   ]



// //---------------------------------------------



const BubbleSortOpt = (arr) => {
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j+1]){
              let temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
           }
        }
    }
    return arr
}



console.log(BubbleSortOpt([37,45,29,8,12,88,-3]))