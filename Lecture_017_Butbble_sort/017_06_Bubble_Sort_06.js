function BubbleSort(arr) {
    for (let i = arr.length; i > 0; i--){
        noSwap = true
    for(let j = 0; j < i -1; j++){
        if (arr[j] > arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            noSwap = false
        }
    }
    if (noSwap){
        break
    }
        
}
return arr
}


console.log(BubbleSort([8,1,2,3,4,5,6,7]))