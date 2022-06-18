let swap = (arr, i, j ) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp 
   }

let bubbleSort = (arr, n) => {
     let i, j
     for (i = 0; i < n; i++){
         for(j = 0; j < n - i; j++){
             console.log(arr, arr[j], arr[j+1])
             
            if (arr[j] > arr[j+1]){
                swap (arr, j, j + 1)
            }
         }
     }
}

let printArray = (arr,size) => {
    let i 
    for (i = 0; i < size; i++){
     console.log(arr[i]) 
    }
}

const arr = [64, 34, 25, 12, 22, 11, 90]
let n = arr.length
console.log('Unsorted array: ')
console.log(printArray(arr, n))

bubbleSort(arr, n)

console.log('The sorted array: ') 
console.log(printArray(arr, n))