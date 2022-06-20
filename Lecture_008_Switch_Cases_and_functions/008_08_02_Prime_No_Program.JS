

const PrimeOrNot = (n) => {
    for (let i = 2; i <= n; i++){
        if (n % i === 0){
            return 0
        }
    }
    return 1
}

const number = 4
if (PrimeOrNot(number) === 0){
    console.log(`Not a Prime`)
}else{
    console.log(`Is Prime`)
}

