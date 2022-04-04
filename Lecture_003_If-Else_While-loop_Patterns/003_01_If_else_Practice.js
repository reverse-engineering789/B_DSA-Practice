let evenOdd = function (check) {
      if (check % 2 === 0){
        console.log ('The number is even')
      }else{
        console.log ('The number is odd')
      }
}

let test1 = evenOdd(3)
let test2 = evenOdd(4)


// Output:
// The number is odd
// The number is even
//---------------------------------


let test = function(a, b){
    if (a > b){
        console.log('a is greater then b')
    } else {
        console.log('b is greater the a')
    }
}

let testCase1 = test (1,2)
let testCase2 = test (4,2)


// Output:
// b is greater the a
// a is greater then b


//----------------------------------------------



let PorN = function(a){
    if (a > 0){
        console.log('a is positive!')
    }else if(a < 0){
        console.log('a is negative!')
    }else{
          console.log('a is zero')
    }
}


let test4 = PorN(10)
let test5 = PorN(-1)
let test6 = PorN(0)

// Output:
// a is positive!
// a is negative!
// a is zero


//---------------------------------------



