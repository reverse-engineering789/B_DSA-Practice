const n = 6

for (let i = 1; i <= n; i++){
      let currentVal = i
    for (let j = 1; j <= i; j++){
        console.log(currentVal)
        currentVal = currentVal + 1
    }
    console.log(' ')
}

// Output:
// 1
 
// 2
// 3

// 3
// 4
// 5

// 4
// 5
// 6
// 7

// 5
// 6
// 7
// 8
// 9

// 6
// 7
// 8
// 9
// 10
// 11