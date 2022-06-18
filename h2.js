 
 function bubbleSort(arr){
    let noSwaps
    for (let i = arr.length; i > 0;  i--){
        //   i = 4 ;         i > 0;   i++
        noSwaps = true   // INITIALLY SET NO SWAP = TRUE
        for (let j = 0; j < i-1 ; j++){
             //  j = 0; j < 3   ; j++   
             console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                // SWAP 
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false    // IF WE MAKE SWAP THEN SET IT TO FALSE
            }
        }  
        if (noSwaps) break
    }
    return arr
}

console.log(bubbleSort([8,1,2,3,4,5,6,7]))