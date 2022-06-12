const n = 5 
string = ''

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n-i; j++){
         string = string + ' '
    }
    for (let k = 1; k <= (2*i)-1; k++){
        string = string + '*'
    }
     string = string + '\n'
}

console.log(string)