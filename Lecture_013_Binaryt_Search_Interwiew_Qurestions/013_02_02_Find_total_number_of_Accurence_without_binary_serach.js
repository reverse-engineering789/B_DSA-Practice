const totalOcc = (arr, key) => {
    let count = 0
       for (let i = 1; i <= arr.length-1; i++){
           if (arr[i] === key){
               count++
           }
       } 
       return count
}


let array = [1,2,3,3,3,3,3,3,3,3,3,3,5]
const totalOccurece =  totalOcc(array, 5)
console.log(totalOccurece)

