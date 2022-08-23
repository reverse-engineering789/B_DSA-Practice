const nonRevrse = (arr,n) => {
   let array1 = []
    for (let i = 0; i < n; i++){
        array1.push(arr[i])
    }
    return array1
}

const reverseAtGiveP = (arr, n) => {
    let array2 = []
    for (let i = arr.length-1; i >= n; i--){
        array2.push(arr[i])
    }
    return array2
}

const n = 5;
const array = [2,4,6,8,10,12,14,16,18,20]
console.log(nonRevrse(array, n) +',' + reverseAtGiveP(array, n))


// Output:
// 2,4,6,8,10,20,18,16,14,12