// const getPivot = (arr) => {
//     let s = 0
//     let e = arr.length-1
//     let mid = s + Math.floor((e - s) / 2)

// while (s < e){
//     if (arr[mid] >= arr[0]){
//         s = mid + 1
//     }else{
//         e = mid 
//     }
//     mid = s + Math.floor((e - s) / 2)
// }
// return s
// }

// let test1 = [8,10,17,1,3]
// let test2 = [3,8,10,17,1]

// console.log(getPivot(test1))
// console.log(getPivot(test2))


// // Output:
// // 3
// // 4


// // // ----------------------------------------------------------


const findPivot = (arr) => {
    let start = 0
    let end = arr.length - 1
    let pivot = 0

    let mid = start + Math.floor((end - start) / 2)
    while (start < end) {
        if (mid >= arr[0]) {
            start = mid + 1
        } else {
            end = mid
            // return 
        }
        mid = start + Math.floor((end - start) / 2)
    }
    return start
}
let array = [2, 4, 6, 8, 10, 3, 5]
console.log(findPivot(array))