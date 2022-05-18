const n = 4

for (let i = 1; i <= n; i++){
    let currentVal = i
    for(let j = 1; j <= i; j++){
        console.log(currentVal)
        currentVal--
    }
    console.log(' ')
}

// Output:
// 1
 
// 2
// 1

// 3
// 2
// 1

// 4
// 3
// 2
// 1