// const search = (arr, key) => {
//      for (let i = 0; i < arr.length; i++)   {
//          if (arr[i] === key){
//              return 1
//          }
//      }
//      return 0
// }

// const Array = [2,4,6,8,10]

// const number = 4

// const test = search(Array, number)

// if (test) {
//   console.log(number + ' is present')
// }else{
//   console.log(number + ' is absent')
// }

// // Output:
// // 4 is present


// //--------------------------------------------------------------------


function test (n, item)  {
  for(let i = 0; i <= n.length-1; i++){
    if (n[i] === item){
      return `${item} is present`
    }
  }
return `${item} is not present`
}
Array = [2,4,6,8,10]
console.log(test(Array, 4))
console.log(test(Array, 5))

// Output:
// 4 is present
// 5 is not present

// //--------------------------------------------------------------------



