// let n = 5;
// let string = "";
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= i; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 1; k <= n - i; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);


// // Output:
// // 1
// // 12
// // 123
// // 1234
// // 12345
// // 1234
// // 123
// // 12
// // 1



//============================================================




const n = 5
string = ''
for (let i = 1; i <= n; i++){
  for (let j = 1; j <= i; j++){
      string = string + j
  }
  string = string + '\n'
}

for (let i = 1; i <= n; i++){
  for (let j = 1; j < n-i+1; j++){
    string = string + j
  }
  string = string + '\n'
}

console.log(string)


// Output:
// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1