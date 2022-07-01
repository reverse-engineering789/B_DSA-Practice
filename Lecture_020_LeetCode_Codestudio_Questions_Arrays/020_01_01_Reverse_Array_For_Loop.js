const reverse1 = (v) => {
    for (let i = v.length-1; i >= 0; i-- ){
           console.log(v[i])
    }
}

const v2 = [11,7,3,12,4]
reverse1(v2)
// // Output:
// // 4
// // 12
// // 3
// // 7
// // 11


// // -----------------------------------------------------


const reverse = (v) => {
     let s = 0
     let l = v.length-1

     while ( s < l){
         let temp = v[s]
         v[s] = v[l]
         v[l] = temp
         s++
         l--
     }
     return v
}

const print = (v) =>  {
       for (let i = 0; i < v.length-1; i++){
           console.log(v[i])
       }
}
const v1 = [11,7,3,12,4]
reverse(v1)
print(v1)



// // -----------------------------------------------------




// Note: this code will not work


// const reverseArray = (arr) => {
    
//     for (let i = 0; i <= arr.length - 1; i++){
//         for (let j = arr.length-1; j >= 0; j--){
//             let temp = arr[i]
//             console.log(temp)
//             arr[i] = arr[j]
//             console.log(arr[i])
//             arr[j] = temp
//             console.log(arr[j])
//             console.log('+++++++++')
//         }
//         console.log('----------')
//     }
//     return arr

// }
// const printArray = (arr) => {
//     // let arrayList = []
//     for (let i = 0; i <= arr.length-1; i++){
//         // arrayList.push(arr[i])
        
//     }
//     console.log(arr)
//     // console.log(arrayList)
// }
// const array1 = [2,3,4,5,6,7,8]
// const array2 = [2,4,6,8]

// console.log(reverseArray(array1))
// // printArray(array1)


// // reverseArray(array2)
// // printArray(array2)