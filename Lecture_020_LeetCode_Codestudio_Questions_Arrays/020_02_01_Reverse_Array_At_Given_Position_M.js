// const reverse = (arr, ind) => {
//     let s = ind
//     let e = arr.length-1

//       while(s <= e){
//           let temp = arr[s]
//           arr[s] = arr[e]
//           arr[e] = temp
//           s++
//           e--
//       }
//     return arr
// }


// const print = (arr) => {
//        for (let i = 0; i < arr.length; i++){
//            console.log(arr[i])
//        }
// }

// const testCase1 = [2,4,6,8,10,12,16]
// const index = 3
// reverse(testCase1, index)
// print(testCase1)

// // Output:
// // 2
// // 4
// // 6
// // 16
// // 12
// // 10
// // 8


// //-----------------------------------------
// let reversedArray = []
// const reversed = (arr, index) => {
//     for (let i = arr.length; i >= index; i--){
//         reversedArray.push(arr[i])   
//     }
//     return reversedArray
// }

// let nonReversedArray = []
// const nonReversed = (arr, index) => {
//     for (let j = 0; j < index; j++){
//         nonReversedArray.push(arr[j])
//     }
//     return nonReversedArray
// }

// const completeArray = nonReversedArray.concat(reversedArray)


// const testCase1 = [2,4,6,8,10,12,16]
// const index = 3
// reversed(testCase1, index)
// nonReversed(testCase1, index)
// console.log(completeArray)


// // -------------------------------------------------



const reverseArray = (arr, n) => {
    let empty1 = []
    let i = arr.length-1
     while (i >= n){
          empty1.push(arr[i])
        i--
     }
    return empty1
}


const NONreverseArray = (arr, n) => {
    empty2 = []
    let i = 0
  
     while (i < n){
          empty2.push(arr[i])
          i++
     }
     return empty2
}

 const array = [2,4,6,8,10,12,14,16,18,20]
let n = 3 
console.log(NONreverseArray(array, n) +',' + reverseArray(array, n))


// Output:
// 2,4,6,20,18,16,14,12,10,8