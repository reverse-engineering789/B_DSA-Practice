// let n = 3;
// let count = 1;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // creating numbers
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);


// // Output:
// //    1
// //   234
// //  56789




// // ---------------------------------------------------



const n = 4
string = ''
for (let i = 1; i <= n; i++){
  count = 1
  for (let j = 1; j <= n-i+1; j++){
    string = string + ' '
  }
  for (let k = 1; k <= (2*i)-1; k++){
    string = string + count 
    count++
  } 
  string = string + '\n'
}

console.log(string)


// Output:
//    1
//   123
//  12345
// 1234567