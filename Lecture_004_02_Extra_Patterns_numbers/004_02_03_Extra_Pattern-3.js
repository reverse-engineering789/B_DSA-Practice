// // 54321
// // 4321
// // 321
// // 21
// // 1


// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += n - j + 1;
//   }
//   string += "\n";
// }
// console.log(string);





// // ----------------------------------------------------------


const n = 5
string = ''
for (let i = 1; i <= n; i++){
  for (let j = 1; j <= n-i+1; j++){
    string = string + (n-i-j+2) + ' '
  }
  string = string + '\n'
}

console.log(string)


// Output:
// 5 4 3 2 1 
// 4 3 2 1
// 3 2 1
// 2 1
// 1
