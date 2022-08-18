
const reverseArray = (arr) => {
    let start = 0
    let end = arr.length-1

    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    start ++
    end--
}

const printArray = (arr) => {
    let emptyArr = []
    for (let i =0; i <= arr.length-1; i++){
         emptyArr.push(arr[i])
    }
    console.log(`reversed array: ${emptyArr}`)
}


const array = [2,4,6,8]
console.log(`original array: ${array}`)
reverseArray(array)
printArray(array)

// Output:
// original array: 2,4,6,8
// reversed array: 8,4,6,2



// ----------------------------------------------------------
// LB code:

const reverse = (arr) => {
     let i = 0
     let j = arr.length - 1
     
     while (i <= j){
     let temp = arr[i]
     arr[i] = arr[j]
     arr[j] = temp
     i++
     j--
           }
    }

let printArray1 = (arr) => {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

const array1 = [2,4,6,8,10]
console.log('Original array: ' + array1)

reverse(array1)
console.log('reversed array:')
printArray1(array1)

// Output:
// Original array: 2,4,6,8,10
// reversed array:
// 10
// 8
// 6
// 4
// 2


// // --------------------------------

// const reverse = (arr) => {
//     let string = []
//     for (let i = arr.length-1; i > 0; i--){
//          string.push(arr[i])
//     }
//    console.log(string)
// }

// const array = [2,4,6,8,10]
// reverse(array)

// // Output:
// // [ 10, 8, 6, 4 ]


// // ------------------------------------------------------------

// const reverseArrray = (arr) => {
//     string = ''
//    let start = 0
//    let end = arr.length-1
//     for (let i = 0; i <= arr.length-1; i++){
//          let temp = arr[start]
//          start = end
//          end = temp
//     }
//       return arr
// }


// const arr1 = [1,2,3,4,5,6,7,8]
// const arr2 = [2,4,6,8]

// console.log(reverseArrray(arr1))
// console.log(reverseArrray(arr2))

// Output:
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]
//   [ 2, 4, 6, 8 ]

// // --------------------------------



// const reverseArray = (arr) => {
    
//     for (let i = 0; i <= arr.length-1; i++){
//         let start = 0
//     let end = arr.length - 1
//              let temp = arr[start]
//              arr[start] = arr[end]
//              arr[end] = temp
//     }
//     return arr
// }


// const arr1 = [2,4,6,8,10]
// console.log(reverseArray(arr1))
// // Output:
// // [ 10, 4, 6, 8, 2 ]

// -----------------------------------------------------------

// const array = (arr) => {
//     for (let i = 0; i < arr.length-1; i++){
//         // let start = 0
//         // let end = arr.length - 1

//         if (arr[i] > arr[i+1]){
//             let temp  = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             console.log(arr)
//         }
//     }
// //    return arr
// }

// const array1 = [10,6,4,8,2]
// console.log(array(array1))


// // Output:
// // [ 2, 4, 6, 8, 10 ]


// --------------------------------------------------------------


// not working
// let reverse = (arr) => {
// for (let i = 0; i < arr.length/2; i++){
//     for (let j = arr.length-1; j > arr.length/2; j++){
//          let temp = arr[i]
//          arr[i] = arr[j]
//          arr[j] = temp
//     }
//       return arr
// }

// }

// let array1 = [2,4,6,8,9,10]
// console.log(reverse(array1))


// =================================================================


// // --------------------------------------------------------



// const reverse = (arr) => {
//      let i = 0
//      let j = arr.length - 1
     
//      while (i <= j){
//      let temp = arr[i]
//      arr[i] = arr[j]
//      arr[j] = temp
//      i++
//      j--
//            }
//     }

// let printArray = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }

// const array = [2,4,6,8,10]
// console.log('Original array: ' + array)

// reverse(array)
// console.log('reversed array:')
// printArray(array)



// ----------------------------------------------------------------





