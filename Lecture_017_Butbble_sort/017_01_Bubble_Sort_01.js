const BubbleSort = (arr) => {
   for (let i = 0; i < arr.length; i++){
       for (let j = i+1; j <arr.length; j++){
           if  (arr[i] > arr[j]){
               temp = arr[i]
               arr[i] = arr[j]
               arr[j] = temp
           }
       }
   }
   return arr
}

const arr1 = [2,6,4,8,10,16,14]

const testCase1 = BubbleSort(arr1)
console.log(testCase1)
