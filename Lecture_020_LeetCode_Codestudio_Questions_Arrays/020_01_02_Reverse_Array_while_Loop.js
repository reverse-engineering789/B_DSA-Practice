// 22-08

const reverse = (arr) => {
    let i = 0;
    let j = arr.length-1
    
    while (i < j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
     
    i++
    j--
}
}

const print = (arr) => {
    let reversedArray = []
    for (let i = 0; i <= arr.length-1; i++){
           reversedArray.push(arr[i])
    }
    console.log(reversedArray)
}


const TestCase1 = [2,4,6,8,10]
reverse(TestCase1)
print(TestCase1)
