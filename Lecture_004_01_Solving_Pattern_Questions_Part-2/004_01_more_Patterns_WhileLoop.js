let n = 4

let i = 1

while ( i <= n){
    let j = 1
    while (j <= n){
   console.log(j)
   j++
    }
    console.log('\n')
   i++
}


// Output:


// 1
// 2
// 3
// 4


// 1
// 2
// 3
// 4


// 1
// 2
// 3
// 4


// 1
// 2
// 3
// 4
//---------------------------------------------------------

let number = 4



for(let i = number; i >= 1; i--){
    for (let j = number; j >= 1; j--){
        console.log(j)
    }
    console.log('\n')
}

// Output:
// 4
// 3
// 2
// 1


// 4
// 3
// 2
// 1


// 4
// 3
// 2
// 1


// 4
// 3
// 2
// 1
//---------------------------------------------------------

let n = 4

let  i = 1

let count = 1

while (i<=n){
    let j = 1
while(j<=n){
    console.log(count)
    count = count + 1
    j = j + 1
}
console.log('\n')
i = i + 1
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
// 10
// 11
// 12


// 13
// 14
// 15
// 16

//---------------------------------------------------------

let n = 4 

let row = 1

while(row <= n){

    let col = 1
    let value = row 

    while (col <= row){
        console.log(value)
        value = value + 1 
        col = col + 1
    }
    console.log('\n')
    row = row + 1
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

//---------------------------------------------------------

let n = 4 

let i = 1

while ( i <= n){

    let j = 1
    while(j <= i){
        console.log(i-j+1)
        j = j + 1
    }
    console.log('\n')
    i = i + 1
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