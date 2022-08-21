// My code:
const findDup = (arr) => {
    let array = []
    for (let i = 0; i <= arr.length-1; i++){
        for (let j = i+1; j <= arr.length-1; j++){
            if (arr[i] === arr[j]){
                array.push(arr[i])
            }
        }
    }
    console.log(array)
}

let arr1 = [2,5,4,3,2] 
let arr2 = [6,3,1,5,4,3,2]
let arr3 = [2,4,3,6,6,3,4,2]
let arr4 = [2,4,3,6,6,3,4,2,1]
findDup(arr1)
findDup(arr2)
findDup(arr3)
findDup(arr4)

// // --------------------------------------------------

//L.b: 

// // 010_03_Find_Duplicates
// // not giving proper output for test case: [2,4,3,6,6,3,4,2]



let findDuplicate = (arr) => {
    let ans = 0

    for (let i = 0; i < arr.length; i++){
        ans = ans^arr[i]
    }

    for (let i = 1; i < arr.length; i++){
        ans = ans^i
    }
    return ans
}

let array1 = [2,5,4,3,2] 
let array2 = [6,3,1,5,4,3,2]

console.log('The duplicate element in arr1: ' + findDuplicate(array1))
console.log('The duplicate element in arr2: ' + findDuplicate(array2))



// // --------------------------------------------------


// const findDup = (arr) => {
//     let array = []
//     for (let i = 0; i <= arr.length-1; i++){
//         for (let j = i+1; j <= arr.length-1; j++){
//             if (arr[i] === arr[j]){
//                 array.push(arr[i])
//             }
//         }
//     }
//     console.log(array)
// }

// let arr1 = [2,5,4,3,2] 
// let arr2 = [6,3,1,5,4,3,2]
// let arr3 = [2,4,3,6,6,3,4,2]
// let arr4 = [2,4,3,6,6,3,4,2,1]
// findDup(arr1)
// findDup(arr2)
// findDup(arr3)
// findDup(arr4)


///--------------------------------------------------------------