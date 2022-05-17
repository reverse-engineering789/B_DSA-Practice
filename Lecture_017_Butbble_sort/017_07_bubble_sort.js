// // wrong approach
// const BubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         for (let j =i-1; j >= 0; j--){
//             if (arr[i] < arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// const testCase1 = [2,26, 6, 20, 14, 30, 1]
// console.log(BubbleSort(testCase1))




// //-----------------------------------------



const  bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i-1; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}



console.log(bubbleSort([37,45,29,8,12,88,-3]))

// Output:
// [
//     -3,  8, 12, 29,
//     37, 45, 88
//   ]

