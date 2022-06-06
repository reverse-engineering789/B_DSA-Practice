const n = 5

for (let i = 1; i <= n; i++){
    for(let j = 1; j < n-i; j++){
          console.log(' ')
    }
        for (let k = 1; k <= (2*(n-i+1)-1); k++){
            console.log(k)
        }
        console.log(' ')
}

for (let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        console.log(' ')
    }
    for (let k = 1; k <= (2 * i - 1); k++){
        console.log(k)
    }
    console.log(' ')
}



// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9



// 1
// 2
// 3
// 4
// 5
// 6
// 7


// 1
// 2
// 3
// 4
// 5

// 1
// 2
// 3

// 1

 



// 1




// 1
// 2
// 3



// 1
// 2
// 3
// 4
// 5


// 1
// 2
// 3
// 4
// 5
// 6
// 7

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9