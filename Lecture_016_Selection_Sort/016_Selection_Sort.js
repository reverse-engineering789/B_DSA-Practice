// function selectionSort(arr){
//     for (let i = 0; i < arr.length; i++){
//         let lowest = i;
//          for (let j = i+1; j < arr.length; j++){
//              if (arr[j] < arr[lowest]){
//                  lowest = j;
//              }
//             }
//         let temp = arr[i]
//         arr[i] = arr[lowest]
//         arr[lowest] = temp
//     }
//     return arr
// }


// console.log(selectionSort([0,2,34,22,10,19,17]))




function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++){
        let lowest = i
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[lowest]){
                lowest = j
            }
        }
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}