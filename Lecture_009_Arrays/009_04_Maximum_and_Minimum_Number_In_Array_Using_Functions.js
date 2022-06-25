// // using Functions: 

// let getMin = (arr) => {
//     let min = arr[0]
//   for(let i =0; i <= arr.length; i++){
//       if (arr[i] < min){
//           min = arr[i]
//       }
//   }
//   return min
// }

// let getMax = (arr) => {
//     let max = arr[0]
//     for (let i = 0; i <= arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }


// let arr1 = [2,4,6,8]

// console.log(getMax(arr1))
// console.log(getMin(arr1))


// // // -----------------------------------------


// function findMin(arr){
//     let min = arr[0]
//     for (let i = 0; i <= arr.length-1; i++){
//            if (arr[i] < min){
//                min = arr[i]
//            }
//     }
//     console.log('min: ' + min)
// }

// const findMax = (arr) => {
//     let max = arr[0]
//     for (let i = 0; i <= arr.length-1; i++){
//            if (arr[i] > max){
//                max = arr[i]
//            }   
//     }
//     console.log('max: '+ max)
// }

// const arrMin = [1,2,3,4,5,6,0]
// findMin(arrMin)
// const arrMax = [1,2,3,4,5,0,6]
// findMax(arrMax)

// // Output:
// // min: 0
// // max: 6


// //-----------------------




const findMax = (arr) => {
    let max = arr[0]
    for (let i = 0; i <= arr.length - 1; i++){
           if (arr[i] > max){
               max = arr[i]
           }
    }
    return 'max: ' + max
}

const findMin = (arr) => {
    let min = arr[0]
    for (let j = 0; j <= arr.length-1; j++){
        if (arr[j] < min){
            min = arr[j]
        }
    }
    return 'min: ' + min
}


arr1 = [1,2,6,0,3,-2,7]
console.log(findMax(arr1))
console.log(findMin(arr1))

// Output:
// max: 7
// min: -2