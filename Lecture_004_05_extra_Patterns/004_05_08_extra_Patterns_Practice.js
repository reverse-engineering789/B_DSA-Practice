const n = 5 

for (let i = 1; i <= n; i++){
    for (let k = 1; k <= i; k++){
        console.log(k)
    }
    console.log(' ')
}

for (let m = 1; m <= n-1; m++){
for (let j = 1; j <= n-m; j++){
        console.log(j)
}
   console.log(' ')
}


// Output:
// 1
 
// 1
// 2

// 1
// 2
// 3

// 1
// 2
// 3
// 4

// 1
// 2
// 3
// 4
// 5

// 1
// 2
// 3
// 4

// 1
// 2
// 3

// 1
// 2

// 1