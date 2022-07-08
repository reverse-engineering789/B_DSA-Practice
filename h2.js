let reverse = (v) => {
    let s = 0
    let e = v.length - 1

    while (s < e){
    let temp = v[s] 
    v[e] = v[s]
    v[s] = temp
    s++
    e--
    }
    return v
}

let findArraySum = (a, b) => {
     let i = a.length - 1 
     let j = b.length - 1
     let ans = []
     let carry = 0 

     while (i >= 0 && j >= 0){
         let val1 = a[i]
         let val2 = b[j]

         let sum = val1 + val2 + carry

         carry = Math.floor(sum / 10)
         sum = sum % 10
         ans.push(sum)
         i--
         j--
     }
// first case
     while (i >= 0){
    let sum = a[i] + carry
    carry = Math.floor(sum / 10)
    sum = sum % 10
    ans.push(sum)
    i--
     }

// second case
while (j >= 0){
    let sum = b[j] + carry
    carry = Math.floor(sum / 10)
    sum = sum % 10
    ans.push(sum)
    j--
}


while (carry !== 0){
    let sum = carry 
    carry = Math.floor(sum / 10)
    sum = sum % 10
    ans.push(sum)
}


return (reverse(ans))

}

let array1 = [6]
let array2 = [6]

let test = findArraySum(array1, array2)
console.log(test)

