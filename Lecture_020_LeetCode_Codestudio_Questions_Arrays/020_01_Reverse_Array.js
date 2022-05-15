// const reverse = (v) => {
//     for (let i = v.length-1; i >= 0; i-- ){
//            console.log(v[i])
//     }
// }


// const v1 = [11,7,3,12,4]
// reverse(v1)
// // Output:
// // 4
// // 12
// // 3
// // 7
// // 11


// // -----------------------------------------------------


const reverse = (v) => {
     let s = 0
     let l = v.length-1

     while ( s < l){
         let temp = v[s]
         v[s] = v[l]
         v[l] = temp
         s++
         l--
     }
     return v
}

const print = (v) =>  {
       for (let i = 0; i < v.length-1; i++){
           console.log(v[i])
       }
}
const v1 = [11,7,3,12,4]
reverse(v1)
print(v1)