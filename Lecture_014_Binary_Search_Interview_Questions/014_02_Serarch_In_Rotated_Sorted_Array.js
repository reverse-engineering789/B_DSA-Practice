// let getPivot = (arr) => {
//     let s = 0
//     let e = arr.length - 1
//     let mid = s + Math.floor((e - s) / 2)


// while (s < e) {
//     if (arr[mid] >= arr[0]){
//         s = mid + 1
//     }else{
//         e = mid
//     }
//     mid = s + Math.floor((e - s) / 2)
// }
// return s 
// }


// let binarySearch = (arr, s, e, key) => {


//     let start = s 
//     let end = e

//     let mid = start + Math.floor((end - start) / 2)

//     while (start <= end) {
//         if (arr[mid] === key) {
//             return mid
//         }
//         if (key > arr[mid]){
//             start = mid + 1
//         }else{
//             end = mid - 1
//         }
//         mid = start + Math.floor((end - start) / 2)
//     }
//     return -1
// }


// let findPostion = (arr, k) => {
//    let pivot = getPivot(arr)
//    if(k >= arr[pivot] && k <= arr[arr.length-1]){
//         return binarySearch(arr, pivot, arr.length-1, k)
//    } else {
//        return binarySearch(arr, 0, pivot-1, k )
//    }
// }


// let test1 = [7,8,1,3,5]

// let check = findPostion(test1, 5)

// console.log(check)

// // Output:
// // 4


// // // ---------------------------------------------------------

