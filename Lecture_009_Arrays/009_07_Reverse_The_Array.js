const reverse = (arr) => {
     let i = 0
     let j = arr.length - 1
     
     while (i <= j){
     let temp = arr[i]
     arr[i] = arr[j]
     arr[j] = temp
     i++
     j--
           }
    }

let printArray = (arr) => {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

const array = [2,4,6,8,10]
console.log('Original array: ' + array)

reverse(array)
console.log('reversed array:')
printArray(array)

// Output:
// Original array: 2,4,6,8,10
// reversed array:
// 10
// 8
// 6
// 4
// 2