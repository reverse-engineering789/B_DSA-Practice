const n = 10
let a = 0
let b = 1
console.log(a)
console.log(b)
for (let i = 0; i <= n; i++){
    let nextNum = a + b
    console.log(nextNum)

     a = b
     b = nextNum
}

// Output:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144