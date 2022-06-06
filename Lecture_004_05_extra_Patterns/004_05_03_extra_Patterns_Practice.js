// 54321
// 5432
// 543
// 54
// 5



const n = 5

for (let i = 5; i >= 1 ; i--){
    for (let j = 5; j >= n-i+1; j--){
        console.log(j)
    }
    console.log(' ')
}


// Output:
// 5
// 4
// 3
// 2
// 1

// 5
// 4
// 3
// 2

// 5
// 4
// 3

// 5
// 4

// 5