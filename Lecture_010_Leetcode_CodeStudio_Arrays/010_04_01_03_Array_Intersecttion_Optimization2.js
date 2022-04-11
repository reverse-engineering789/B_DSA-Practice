let findArrayIntersection = (arr1, arr2) => {
    let i = o; j = 0;
    let ans = []

    while ( i < arr1.length && i <arr2.length){

        if (arr[i] === arr[j]){
            ans.push(arr1[i])
            i++
            j++
        }else if (arr1[i] < arr2[j]){
            i++
        }else{
            j++
        }
    }
        return ans 
    }

let array1 = [1,2,3,4,5,6,7,8,10]
let array2 = [2,4,6,8]

let test = findDuplicate(arr1, arr2)

console.log(test)

// Output:
// [2,4,6,8]