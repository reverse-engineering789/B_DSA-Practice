// let firstOcc = (arr, key) => {
//      let s = 0;
//      let e = arr.length-1
//      let ans = -1
//      let mid = s + Math.floor(s + (e-s)/ 2)


//      while (s <= e){
//          if (arr[mid] === key){
//          //    console.log(arr[mid])
//              ans = mid
//              e = mid - 1

//          }else if (key > arr[mid]){
//              s = mid + 1
             
//          }else if (key < arr[mid]){
//              e = mid - 1
//          }

//          mid = s + Math.floor((e-s)/ 2)
//         // console.log(mid)
//      }
//      return ans
// }


// let LastOcc = (arr, key) => {
//     let s = 0;
//     let e = arr.length-1
//     let ans = -1
//     let mid = s + Math.floor(s + (e-s)/ 2)


//     while (s <= e){
//         if (arr[mid] === key){
//           // console.log('arr[mid] '+arr[mid])
//             ans = mid
//             s = mid + 1
//             //console.log('s' + s)

//         }else if (key > arr[mid]){
//             s = mid + 1
            
//         }else if (key < arr[mid]){
//             e = mid - 1
//         }
        
//         mid = s + Math.floor((e-s)/ 2)
//     //   console.log(mid)
//     }
//     return ans
// }


// let even = [1,2,3,3,3,3,3,3,3,3,3,3,5]
// console.log('first acc of 3 is: ' + firstOcc(even, 3))
// console.log('last acc of 3 is: ' + LastOcc(even, 3))



// // Output:
// // first acc of 3 is: 2
// // last acc of 3 is: 3



// // -----------------------------------------------------

const firstOccurece = (arr,key) => {
       let  start = 0
       let  end = arr.length-1
       let ans = -1
        mid = Math.floor(start + (end - start)/2)
           while (start <= end){
        if (arr[mid] === key){
            ans = mid
            e = mid - 1
        }
        if (arr[mid] > key){
            start = Mid + 1
        }else{
            end = mid - 1
        }
       mid = (start + (end - start) / 2)
    }
    return ans 
}


const LastOcc = (arr, key) => {
   let start = 0
   let end = arr.length-1 
   let answer = -2
    let mid = (start + (end - start)/2)
   while (start <= end){
    if (arr[mid] === key){
         answer = arr[mid]
         start = mid + 1
    }
    if (arr[mid] > key){
        start = mid + 1
    }else{
        end = mid - 1
    }
    mid = (start + (end - start)/2)
   }
   return answer
}



let even = [1,2,3,3,3,3,3,3,3,3,3,3,5]
console.log('first acc of 3 is: ' + firstOccurece(even, 3))
console.log('last acc of 3 is: ' + LastOcc(even, 3))