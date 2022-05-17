const insertionSort = (arr) => {
          let i = currentVal
          let j 
    for (let i = 1; i < arr.length; i++){
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
   return arr
}
