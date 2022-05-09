// function bubbleSort (arr) {
//     let noSwaps

//     for (let i = arr.length; i > 0; i--){
//         noSwaps = true
//         for (let j = 0; j <i-1; j++){
//             if (arr[j] > a[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1] 
//                 temp = arr[j+1]
//                 noSwaps = false
//             }
//         }
//         if (noSwaps) break
//     }
//     return arr
// }

// console.log(bubbleSort([8,1,2,3,4,5,6,7]))


//------------------------------------


function BubbleSort(arr) {
    let noSwap 
     for (let i = arr.length; i > 0; i--){
         noSwap = true
         for (let j = 0; j < i + 1; j++){
            if (arr[j] > arr[j+1]){
               temp = arr[j]
               arr[j] = arr[j+1]
               arr[j] = temp
               noSwap = false
            }
         }
         if (noSwap) {
             break
         }
         return arr
     }
}

console.log(bubbleSort([8,1,2,3,4,5,6,7]))



//-------------------------------------------------



