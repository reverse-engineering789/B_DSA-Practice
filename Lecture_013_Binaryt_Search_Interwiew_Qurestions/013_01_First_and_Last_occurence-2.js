// let firstOcc = (arr, key) => {
//     let s = 0;
//     let e = arr.length-1
//     let ans = -1
//     let mid = s + Math.floor(s + (e-s)/ 2)


//     while (s <= e){
//         if (arr[mid] === key){
//         //    console.log(arr[mid])
//             ans = mid
//             e = mid - 1

//         }else if (key > arr[mid]){
//             s = mid + 1

//         }else if (key < arr[mid]){
//             e = mid - 1
//         }

//         mid = s + Math.floor((e-s)/ 2)
//        // console.log(mid)
//     }
//     return ans
// }


// let LastOcc = (arr, key) => {
//    let s = 0;
//    let e = arr.length-1
//    let ans = -1
//    let mid = s + Math.floor(s + (e-s)/ 2)


//    while (s <= e){
//        if (arr[mid] === key){
//          // console.log('arr[mid] '+arr[mid])
//            ans = mid
//            s = mid + 1
//            //console.log('s' + s)

//        }else if (key > arr[mid]){
//            s = mid + 1

//        }else if (key < arr[mid]){
//            e = mid - 1
//        }

//        mid = s + Math.floor((e-s)/ 2)
//    //   console.log(mid)
//    }
//    return ans
// }


// let even = [1,2,3,3,3,3,3,3,3,3,3,3,5]
// console.log(firstOcc(even, 3))
// console.log(LastOcc(even, 3))
// const firstOccurece =  firstOcc(even, 3)
// const LastOccurece =  LastOcc(even, 3)

// const totalOccurece = (LastOccurece -firstOccurece) + 1
// console.log(totalOccurece)


// // // Output:
// // // 2
// // // 11
// // // 10


// // -----------------------------------------------------

const firstOcc = (arr, key) => {
    let start = 0
    let end = arr.length - 1
    let answer = -1
    let  mid = start + Math.floor(start+(end-start)/2)
    while (start <= end) {
        
        if (arr[mid] === key) {
            answer = mid
            end = mid - 1
        }else if (key > arr[mid] ) {
            start = mid + 1
        }else if (key < arr[mid]) {
            end = mid - 1
        }
       mid = start + Math.floor((end-start)/2)
    }
    return answer
}


const LastOcc = (arr, key) => {
    let start = 0
    let end = arr.length - 1
    let answer = -2
    let  mid = start + Math.floor(start+(end-start)/2)
    while (start <= end) {
        
         if (arr[mid] === key) {
            answer = mid
            start = mid + 1
        }else if (key > arr[mid]){
            start = mid + 1
        }else if (key < arr[mid]){
            end = mid - 1
        }
        mid = start + Math.floor((end-start)/2)
    }
    return answer
}

array = [1,2,2,2,2,3,4,5,6,8]
console.log(firstOcc(array, 2))
console.log(LastOcc(array, 2))