const n = 6
string = ''

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
        if (i===n){
            string = string + '*'
        }else{
            if (j === 1 || j === i){
              string = string + '*'
            }else{
                string = string + ' '
            }
        }
          
    }
    string = string + '\n'
}

 console.log(string)



// Output:
// *
// **
// * *
// *  *
// *   *
// ******