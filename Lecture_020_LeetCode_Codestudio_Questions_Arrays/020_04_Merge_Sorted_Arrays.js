// let merge = (arr1, n, arr2, m, arr3) => {
//     let i = 0;
//     let j = 0;
//     let k = 0;

//     while ( i< n && j < m){
//         if (arr1[i] > arr2[j]){
//             arr3[k++] = arr[i++]
//         }else{
//             arr3[k++] = arr2[j++]
//         }
//     }
//     while(i < n){
//         arr3[k++] = arr1[i++]
//     }
//     while (j < m){
//         arr2[k++] = arr2[j++]
//     }
// }

// let print = (ans, n) => {
//     for (let i = 0; i < n; i++){
//         console.log(ans[i])
//     }
// }

// let arr1 = [1,3,5,7, 9]
// let arr2 = [2,4,6]
// let arr3 = []

// merge(arr1, 5, arr2, 3, arr3)

// print(arr3, 8)


// // // -------------------------------------------------------

// not able to solve 23-08
// const mergeSorted = (arr1, arr2) => {
//     let third = []
//     for (let i = 0;  i <= arr1.length-1; i++){
//         for (let j = 0; j <= arr2.length-1; j++){
//               if (arr1[i] < arr2[j]){
//                    third.push(arr1[i])
//               }
//         }
//     }
//     console.log(third)
// }

// const array1 = [2,4,6,8,10]
// const array2 = [1,3,5,7,9]
// mergeSorted(array1, array2)
