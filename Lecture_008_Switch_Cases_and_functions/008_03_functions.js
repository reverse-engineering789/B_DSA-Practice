
let Power = (a, b) => {
    let findPower = 1
   for ( let i = 1; i <= b; i++){
          findPower = findPower * a
}
console.log('The power of the given number: ' + findPower)
   }

let test1 = Power(2,4)
let test2 = Power(2,6)


// Output:
// The power of the given number: 16
// The power of the given number: 64

//-------------------------------------------------




let power = (a,b) => {
    let ans = 1
for (let i = 1; i <= b; i++){
       ans = ans * a 
}
return ans
}
    


let moon = power(4,6)
console.log('the answer is: ' + moon)


// Output:
// the answer is: 4096