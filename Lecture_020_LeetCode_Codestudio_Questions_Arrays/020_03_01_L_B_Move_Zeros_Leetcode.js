

const moveZeros = (arr) => {
    let nonZero = 0
    for (let i = 0; i <= arr.length-1; i++){
          if (arr[i] !== 0 ){
              let temp = arr[i]
              arr[i] = arr[nonZero]
              arr[nonZero] = temp
              nonZero++
          }
    }
}
  const printArray = (arr) => {
        for (let i = 0; i<= arr.length-1; i++){
            console.log(arr[i])
        }
    }
    
    array = [1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10]
    
    moveZeros(array)
    printArray(array)


//     Output:
//     1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 0
// 0
// 0
// 0
// 0
// 0
// 0
// 0
// // --------------------------------------------




// // // This code is not working as expected
// const moveZeros = (arr) => {
//    for (let i = 0; i <= arr.length-1; i++){
//        for (let j = i+1; j <= arr.length-1; j++){
//            if (arr[i] > arr[j]){
//                let temp = arr[i]
//                arr[i] = arr[j]
//                arr[j] = temp
//            }
//         }
//    }
   
// }

// const printArray = (arr) => {
//     for (let i = 0; i<= arr.length-1; i++){
//         console.log(arr[i])
//     }
// }

// array = [1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10]

// moveZeros(array)
// printArray(array)


// // Output:
// // 10
// // 9
// // 8
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // 0
// // 0
// // 0
// // 0
// // 0
// // 0
// // 0
// // 0
// // 0


