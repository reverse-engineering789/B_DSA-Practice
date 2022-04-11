let findIntersection = (arr1, arr2) => {

    let ans = []

    for (i = 0; i < arr1.length; i++) {
        let element = arr1[i]
    
    for (let j = 0; j < arr2.length; j++){
        if (element < arr2[j]){
            break;
        }

        if (element === arr2[j]){
            ans.push(element)
            arr2[j] = -112244
            break
        }

        }
        

    }
    return ans
    }


    let arr1 = [1,2,3,4,5,6,7,8]
    let arr2 = [2,4,6,8]

    let test = findIntersection(arr1, arr2)
    console.log(test)

    // Output:
    // [ 2, 4, 6, 8 ]