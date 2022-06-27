// let swapAlternate = (arr) => {
//     for (let i = 0; i < arr.length; i = i+ 2){
//         if (i+1 < arr.length){
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
        
//         }
//     }
// }


// let printArray = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }


// let arr1 = [2,4,6,8,10]

// swapAlternate(arr1)
// printArray(arr1)

// // Output:
// // 4
// // 2
// // 8
// // 6
// // 10


let swapAlter = (arr) => {
    for (let i = 0; i < arr.length; i = i+2){
        if (i+1 < (arr.length)){
         temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        }
    }
}

let printArray = (arr) => {
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
}


const arr1 = [2,4,6,8,10,12,14]
swapAlter(arr1)
printArray(arr1)


// Output:
// 4
// 2
// 8
// 6
// 12
// 10
// 14