// the bellow method is little different then other methods, 
// by taking count = 0


const n = 4

let count = 0
for (let i = 1; i <= n; i++){
    count++
    for (let j = 1; j <= i; j++){
            console.log(count)
    }            
    console.log(' ')
}


// Output:
// 1
 
// 2
// 2

// 3
// 3
// 3

// 4
// 4
// 4
// 4