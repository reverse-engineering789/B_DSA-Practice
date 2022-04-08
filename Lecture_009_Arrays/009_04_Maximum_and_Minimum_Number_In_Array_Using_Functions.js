// using Functions: 

let getMin = (arr) => {
    let min = arr[0]
  for(let i =0; i <= arr.length; i++){
      if (arr[i] < min){
          min = arr[i]
      }
  }
  return min
}

let getMax = (arr) => {
    let max = arr[0]
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}


let arr1 = [2,4,6,8]

console.log(getMax(arr1))
console.log(getMin(arr1))