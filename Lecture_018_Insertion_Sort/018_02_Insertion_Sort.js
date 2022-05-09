// Problem: getting undefined as output.


const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let j = i - 1
        for (; j > 0; j--){
            if (arr[j] > arr[i]){
                 let temp = arr[j]
                 arr[j] = arr[lowest]
                 arr[lowest] = temp
            }else{
                break
            }
            
        }
    }
    return arr
}

let array = [2,4,5,8,6]


let test = insertionSort(array)

console.log (test)