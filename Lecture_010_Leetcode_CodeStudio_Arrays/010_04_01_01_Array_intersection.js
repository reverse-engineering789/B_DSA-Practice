// let findIntersection = (arr1, arr2) => {
//     let ans = []
//       for (let i = 0; i < arr1.length; i++){
//          let element = arr1[i]
    
//       for (let j = 0; j < arr2.length; j++){

//         if (element === arr2[j]){
//             ans.push(element)
//             arr2[j] = -132345
//             break
//         }
//       }
//       }
//       return ans
// }

// let arr1 = [2,4,6,8,10]
// let arr2 = [1,4,6,12,14]


// let test = findIntersection(arr1, arr2)
// console.log(test)

// // Output:
// // [ 4, 6 ]


// // ---------------------------------------


const findIntersection = (arr1, arr2) => {
      interSection = []
      for (let i = 0; i <= arr1.length-1; i++){
        for (let j = 0; j <= arr2.length-1; j++){
                if (arr1[i] === arr2[j]){
                     interSection.push(arr1[i])
                }
        }
      }
      console.log(interSection)
}



const array1 = [2,4,6,8,10,20
]
const array2 = [2,4,5,7,11,20]

findIntersection(array1, array2)


// Output:
// [ 2, 4, 20 ]