const n = 7 
isPrime = 1
for (let i = 0; i < n; i++){
    if (n % i === 0){
        isPrime = 0
        break
    }
}

if (isPrime === 0){
    console.log('Not a Prime Number')
}else{
    console.log(' Prime Number')
}
// Output:
// Not a Prime Number