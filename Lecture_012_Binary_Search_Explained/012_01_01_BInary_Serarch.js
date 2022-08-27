// let binarySearch = (arr, key) => {
//     let start = 0
//     let end = arr.length-1

//     let  mid = Math.floor(( start + end ) / 2)

//     while (start <= end){
//         if (arr[mid] === key){
//             return mid 
//         }
//         if (key > arr[mid]){
//             start = mid + 1

//         }else{
//             end = mid - 1
//         }
//          mid =  Math.floor((start + end) / 2)
//         }
//         return -1
//         }

//         let Even = [3,8,11,14,16,20]
//         let EvenIndex = binarySearch(Even,20)
//         console.log('index of 3 is: ' + EvenIndex)

//         let odd = [3,8,11,14,16]
//         let oddIndex = binarySearch(odd,16)
//         console.log('index of 3 is: ' + oddIndex)


// // =======================================================




// // let iterativeFunction = function (arr, x) {

// //     let start=0, end=arr.length-1;

// //     // Iterate while start not meets end
// //     while (start<=end){

// //         // Find the mid index
// //         let mid=Math.floor((start + end)/2);

// //         // If element is present at mid, return True
// //         if (arr[mid]===x) return true;

// //         // Else look in left or right half accordingly
// //         else if (arr[mid] < x)
// //              start = mid + 1;
// //         else
// //              end = mid - 1;
// //     }

// //     return false;
// // }

// // // Driver code
// // let arr = [1, 3, 5, 7, 8, 9];
// // let x = 5;

// // if (iterativeFunction(arr, x, 0, arr.length-1))
// //    console.log("Element found!<br>");
// // else console.log("Element not found!<br>");

// // x = 6;

// // if (iterativeFunction(arr, x, 0, arr.length-1))
// //     console.log("Element found!<br>");
// // else console.log("Element not found!<br>");


// // // =====================================================




// let iterativeFunction = function (arr, x) {

//     let start=0, end=arr.length-1;

//     while (start<=end){

//         let mid=Math.floor((start + end)/2);

//         if (arr[mid]===x) return mid;

//         else if (arr[mid] < x)
//              start = mid + 1;
//         else
//              end = mid - 1;
//     }

//     return (`-1 (not found)`);
// }


// let arr3 = [1, 3, 5, 7, 8, 9];
// let x1 = 1;
// const answer1 = iterativeFunction(arr3, x1)
// console.log(`the index of ${x1} is: ${answer1}`)

// let x2 = 6;
// let arr2 = [1, 3, 5, 7, 8, 9];
// const answer2 = iterativeFunction(arr2, x2)
// console.log(`the index of ${x2} is: ${answer2}`)



// //===================================


// // let binarySearch = (arr, key) => {
// //     let start = 0
// //     let end = arr.length-1



// //     while (start <= end){
// //         let  mid = Math.floor(( start + end ) / 2)
// //         if (arr[mid] === key){
// //             return 
// //         }
// //         if (key > arr[mid]){
// //             start = mid + 1

// //         }else{
// //             end = mid - 1
// //         }
// // // ++

// //         }
// //         return -1
// //         }

// //         let Even = [3,8,11,14,16,20]
// //         let key1 = 3
// //         let EvenIndex = binarySearch(Even,key1)
// //         console.log('index of 3 is: ' + EvenIndex)

// //         let odd = [3,8,11,14,16]
// //         let  key2 = 3
// //         let oddIndex = binarySearch(odd,key2)
// //         console.log('index of 3 is: ' + oddIndex)


// // -------------------------------------------------------


// 25-8

// const binarySearch = (arr, key) => {
//      let start = 0;
//      let end = arr.length-1

//      let mid = Math.floor(( start + end ) / 2)
//      while (start <= end){
//      if (key === arr[mid]){
//          return mid
//      }
//       if (key < arr[mid]){
//           end = mid-1
//      }else{
//           end = mid + 1
//      }
//      mid = Math.floor(( start + end ) / 2)
//     }
// }


// const array = [2,4,6,8,10]
// const key = 2
// console.log(binarySearch(array, key))

// 27-8
// mid = Math.floor(( start + end ) / 2)
const binarySearch = (arr, key) => {
    let start = 0
    let end = arr.length - 1

    let mid = Math.floor((start + end) / 2)

    while (start <= end) {
        if (arr[mid] === key) {
            return (mid)
        }

        if (key > arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
        mid = Math.floor((start + end) / 2)
    }
}

const array = [2, 4, 6, 8, 10]
console.log(binarySearch(array, 4))