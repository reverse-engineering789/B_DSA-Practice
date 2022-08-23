// let arr = [1, 12, 15, 16, 78, 89, 53];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     let  b;
//     b = arr[i];
//     arr[i] = arr[j];
//     arr[j] = b;
//   }
// }
// console.log(arr);



// // ----------------------------------------------------




const reverseNested = (arr) => {
  for(let i = 0; i <= arr.length-1; i++){
    for (let j = i+1; j <= arr.length-1; j++){
       let temp = arr[i]
       arr[i] = arr[j]
       arr[j] = temp
    }
  }
  console.log(arr)
}

const array = [2,4,6,8,10]

reverseNested(array)