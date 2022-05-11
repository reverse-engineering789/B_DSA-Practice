// const BubbbleSortOptFinal = (arr) => {
//     let noSwap = true
//    for (let i = arr.length; i >= 0; i--){
//        for (let j = 0; j < i - 1; j++){
//            if (arr[j] > arr[j+1]){
//                temp = arr[j]
//                arr[j] = arr[j+1]
//                arr[j+1] = temp
//                noSwap = false
//            }
//        }
//        if (noSwap) {
//            break
//        }
//    }
//    return arr
// }

// console.log(BubbbleSortOptFinal([2,6,4,10,8]))




// //--------------------------------------------------------------




const BubbbleSort = (arr) => {
    let noSwap = true
     for (let i = arr.length; i >= 0; i--){
        
            for (let j = 0; j < i - 1; j++){
               if (arr[j] > arr[j+1]){
                //    let temp = arr[j]
                //    arr[j] = arr[j+1]               }
                //    arr[j+1] = temp
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                   noSwap = false
            }
        }
        if (noSwap){
            break
        }
   }
 return arr
}
console.log(BubbbleSort([2,6,4,10,8]))