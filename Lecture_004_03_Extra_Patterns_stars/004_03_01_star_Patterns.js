// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);


// // Output:
// // *****
// // *****
// // *****
// // *****
// // *****


// // ==========================================================


const n = 5
string = ''
for (let i = 1; i <= n; i++){
   for(let j = 1; j <= n; j++){
       string = string + '*'
   }
   string = string + '\n'
}

console.log(string)

// Output:
// *****
// *****
// *****
// *****
// *****