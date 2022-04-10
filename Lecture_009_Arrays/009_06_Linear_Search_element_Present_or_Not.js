const search = (arr, key) => {
     for (let i = 0; i < arr.length; i++)   {
         if (arr[i] === key){
             return 1
         }
     }
     return 0
}

const Array = [2,4,6,8,10]

const number = 4

const test = search(Array, number)

if (test) {
  console.log(number + ' is present')
}else{
  console.log(number + ' is absent')
}