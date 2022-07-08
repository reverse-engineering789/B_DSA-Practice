
const rotateArray = (arr) => {
    let list = []
    for (let i = arr.length-1; i >= 0; i--){
        list.push(arr[i])
    }
    console.log(list)
    }



let arr1 = [2,4,67,8,10]
rotateArray(arr1)