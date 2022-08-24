// // Not getting any output



// let reverse = (name) => {
//     // let s = 0
//     // let e = name.length-1

//     // while (s < e) {
//     //     let temp = name[s]
//     //     name[s] = name[e]
//     //     name[e] = temp
//     //     name[s++]
//     //     name[e--]
//     // }
//     for (let s = 0; s <= name.length-1; s++){
//         for (let e = name.length-1; e >= 0; e--){
//             let temp = name[s]
//             name[s] = name[e]
//             name[e] = temp
//         }
//     }
// }


// let getLength = (arr) => {
//     let count = 0 
//     for (let i = 0; i <= arr.length; i++){
//         count++
//     }
//     return count
// }

// reverse('Surya')
// getLength('Surya')


// // ------------------------------------------------


// not giveing proper outpu

const reverse = (arr) => {
    for (let i = 0; i <= arr.length-1; i++){
        for (let j = arr.length-1; j >= 0; j--){
               let temp = arr[i]
               arr[i] = arr[j]
               arr[j] = temp
        }
    }
    console.log(arr)
}

const print = (arr) => {
    let string = ''
    for (let i = 0; i <= arr.length-1; i++){
       string = string + arr[i]
    }
    console.log(string)
}



const name1 = 'After noon'
reverse(name1)
print(name1)

// Output:
// After noon
// After noon