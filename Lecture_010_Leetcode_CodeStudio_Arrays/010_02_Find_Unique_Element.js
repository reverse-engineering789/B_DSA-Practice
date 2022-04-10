let findUnique = (arr) => {
    let ans = 0

    for (let i = 0; i < arr.length; i++){
        ans = ans ^ arr[i]
    }
    return ans
}


let testC1 = [2,4,6,8,2,4,6]


console.log(findUnique(testC1))


// Output:
// 8
// 5