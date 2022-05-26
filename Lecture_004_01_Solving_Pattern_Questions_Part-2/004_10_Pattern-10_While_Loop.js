const n = 4
const array = []

for (let i = 1; i <= n ; i++){
    for (let j = 1; j <= i; j++){
        let ch = String.fromCharCode('A'.charCodeAt(0) + (i - 1)) 
        console.log((ch))
        
    }
    console.log(' ')
}


// Output:
// A
 
// B
// B

// C
// C
// C

// D
// D
// D
// D