// let n = 5

// let string = ''

// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= n; j++){
//         if (i === 1 || i === n){
//             string = string + '*'
//         }else{
//             if(j === 1 || j === n){
//             string = string + '*'
//             }else{
//              string = string + ' '
//              }
//         }
//     }
//     string = string + '\n'
// }

// console.log(string)



//***************************************** */



const n = 5 
let string = ''

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){
        if (i === 1 || i === n){
            string = string + '*'
        }else{
            if (j === 1 || j === n){
                string = string + '*'
            }else{
                string = string + ' '
            }
        }
    }
    string = string + '\n'
}

console.log(string)