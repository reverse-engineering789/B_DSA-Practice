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

// // Output:
// // Original array: 2,4,6,8,10
// // reversed array:
// // 10
// // 8
// // 6
// // 4
// // 2


// // --------------------------------



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



// -----------------------------------------------------------

const array = (arr) => {
    for (let i = 0; i < arr.length-1; i++){
        // let start = 0
        // let end = arr.length - 1

        if (arr[i] > arr[i+1]){
            let temp  = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            console.log(arr)
        }
    }
//    return arr
}

const array1 = [10,6,4,8,2]
console.log(array(array1))


// Output:
// [ 2, 4, 6, 8, 10 ]