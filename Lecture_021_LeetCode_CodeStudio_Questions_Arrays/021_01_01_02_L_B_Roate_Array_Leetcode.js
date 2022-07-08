const rotate1 = (nums, k) => {
    let temp = []

    for (let i = 0; i <= nums.length-1; i++){
          temp[(i + k)%nums.length] = nums[i]
    }
    nums = temp

    for (let i = 0; i < temp.length; i++){
        console.log(temp[i])
    }
}

const Array1 = [1,2,3,4,5]
const k1 = 3 

rotate1 (Array1, k1)


// Output:
// 3
// 4
// 5
// 1
// 2