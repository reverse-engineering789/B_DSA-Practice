

// 010_03_Find_Duplicates
// not giving proper output for test case: [2,4,3,6,6,3,4,2]



let findDuplicate = (arr) => {
    let ans = 0

    for (let i = 0; i < arr.length; i++){
        ans = ans^arr[i]
    }

    for (let i = 1; i < arr.length; i++){
        ans = ans^i
    }
    return ans
}

let arr1 = [2,5,4,3,2] 
let arr2 = [6,3,1,5,4,3,2]

console.log('The duplicate element in arr1: ' + findDuplicate(arr1))
console.log('The duplicate element in arr2: ' + findDuplicate(arr2))
