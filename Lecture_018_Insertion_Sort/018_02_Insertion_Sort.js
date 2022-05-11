// // Problem: getting undefined as output.


// const insertionSort = (arr) => {
//     for (let i = 1; i < arr.length; i++){
//         let j = i - 1
//         for (; j > 0; j--){
//             if (arr[j] > arr[i]){
//                  let temp = arr[j]
//                  arr[j] = arr[lowest]
//                  arr[lowest] = temp
//             }else{
//                 break
//             }
            
//         }
//     }
//     return arr
// }

// let array = [2,4,5,8,6]


// let test = insertionSort(array)

// console.log (test)



//---------------------------------------------------




// // naive approach:

function bubbleSort(arr){
    for (let i = 0; i < arr.length;  i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                // SWAP 
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
     }
    return arr
}


console.log(bubbleSort([37,45,29,8]))




// function bubbleSort(arr){
//     for (let i = 0; i < arr.length;  i++){
//         for (let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 // SWAP 
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([37,45,29,8]))