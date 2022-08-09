// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // creating numbers
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

// // Output:
// //      1
// //     123
// //    12345
// //   1234567
// //  123456789 




// // ------------------------------------------------------



// const n = 5 
// let string = ''

// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= n-i; j++){
//         string += ' '
//     }
//     for (let k = 1; k <= ((2*i)-1); k++){
//         string += + k
//     }
//     string = string + '\n'
// }

// console.log(string)

// // Output:
// //     1
// //    123
// //   12345
// //  1234567
// // 123456789


// // ---------------------------------------------------------------




const n = 5

string = ''
for (let i = 1; i <= n; i++){
    for (let j = 0; j <= n-i; j++){
        string = string + ' '
    }
    for (let k = 1; k <= 2*i-1; k++){
        string = string + k
    }
    string = string + '\n'
}

console.log(string)


// Output:
//     1
//    123
//   12345
//  1234567
// 123456789