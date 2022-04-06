// You tube COding Puzzle #1 - Find Max & Min Numbers in Array
// 009_04_Maximum_and_Minimum_Number_In_Array
let arr = [1, 100, 10]

let max = arr[0]
let min = arr[0]


for (let i = 0; i < arr.length; i++ ){
    if (arr[i] >= max){
        max = arr[i]
    }
}
console.log(max)


for (let j = 0; j < arr.length; j++ ){
    if (arr[j] < min){
        min = arr[j]
    }
}

console.log(min)

// Output:
// 100
// 1

// //-------------------


