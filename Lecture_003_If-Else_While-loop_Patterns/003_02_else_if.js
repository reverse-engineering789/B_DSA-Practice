const testNumber = a => {
    if (a > 0){
      console.log( ' a is +ve ')  
    }else if (a < 0){
        console.log( ' a is -ve ')  
    }else{
        console.log( ' a is zero ')  
    }
}


const test1 = testNumber(4)
const test2 = testNumber(-1)
const test3 = testNumber(0)

