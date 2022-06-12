const n = 5 
string = ''

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n-i; j++){
         string = string + ' '
    }
    for (let k = 1; k <= (2*i)-1; k++){
        // if (i === n){
        //     string = string + ' '
        // }else{
            if (k === 1 || k === (2*i)-1){
                string = string + '*'
            }else{
                string = string + ' '
            }
        }
        
    // }
     string = string + '\n'
}
        for (let i = 1; i <= n-1; i++){
            for (let j = 1; j <= i; j++){
                string = string + ' '
            }
            for (let k = 1; k <= (n-i) * 2 - 1; k++){
                if (k === 1 || k === (n-i)*2-1){
                string = string + '*'
                }else{
                    string = string + ' '
                }
        }
        string  = string + '\n'

    }
console.log(string)



// Output:
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *