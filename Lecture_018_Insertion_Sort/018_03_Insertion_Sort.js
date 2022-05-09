
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


function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        for (let j = i - 1; j >=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return currentVal
}