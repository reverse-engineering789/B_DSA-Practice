
const sortOne = (arr) => {
     for (let i = 0; i <= arr1.length-1; i++){
         for (let j = arr.length - 1; j >= 0; j--){
             if (arr[i] > arr[j]){
             let temp = arr[i]
             arr[i] = arr[j]
             arr[j] = temp
         }
     }
    }
    return arr
}

let printArray = (arr) => {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    
}

const arr1 = [1,1,0,0,0,0,1,0]

sortOne(arr1)
console.log(printArray(arr1))