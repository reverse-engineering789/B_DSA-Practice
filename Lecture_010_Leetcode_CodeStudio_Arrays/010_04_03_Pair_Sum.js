

// const pairSum = (arr, sum) => {
//     let   count = 0
//     let sumToatal = []
//          for (let i = 0; i <= arr.length-1; i++){
//              for (let j = i+1; j <= arr.length-1; j++){
//                  if (arr[i] + arr[j] === sum){
//                      sumToatal.push(arr[i], arr[j])
//                        count++ 
//                    console.log("(" + arr[i] + ", " + arr[j] + ")" );
//                  }
//              }
//          }
//          return count
//       }
  
      
  
//   const number = 6
//   const array = [1,2,4,5,6,3]
//   console.log(pairSum(array, number))
  
  
// // // Output:
// // (1, 5)
// // (2, 4)
// // 2



// // ----------------------------------------------



// // gfg -  Print all pairs with given sum
// // JavaScript implementation of simple method to
// // find print pairs with given sum.

// // Returns number of pairs in arr[0..n-1]
// // with sum equal to 'sum'
// function printPairs(arr, n, sum)
// {
// 	let count = 0; // Initialize result

// 	// Consider all possible pairs and check
// 	// their sums
// 	for (let i = 0; i < n; i++)
// 		for (let j = i + 1; j < n; j++)
// 			if (arr[i] + arr[j] == sum)
// 				console.log("(" + arr[i] + ", "
// 					+ arr[j] + ")" );
// }

// // Driver function to test the above function

// 	let arr = [ 1, 5, 7, -1, 5 ];
// 	let n = arr.length;
// 	let sum = 6;
// 	printPairs(arr, n, sum);



// // --------------------------------------------------


const pairSum = (arr , number) => {
     for (let i = 0; i <= arr.length-1; i++){
          for (let j = i+1; j <= arr.length-1; j++){
               if (arr[i] + arr[j] === number){
                     console.log(`(${arr[i]}, ${arr[j]})`)
               }
          }
     }
}


  const number1 = 6
  const array1 = [1,2,4,5,6,3]
  pairSum(array1, number1)
  
//   Output:
//   (1, 5)
// (2, 4)