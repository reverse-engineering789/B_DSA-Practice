// let FirstNumber = 2
// let Operation = '*'
// let SecondNumber = 4

// switch(Operation){
//     case '+':
//         console.log('The sum of two numbers is: ' + FirstNumber + SecondNumber)
//        break;
    
//     case '-':
//         console.log('The answer is: '+  FirstNumber - SecondNumber)
//        break;
    
//        case '*':
//         console.log('The answer is: '+  FirstNumber * SecondNumber)
//        break;
    
//        case '/':
//         console.log('The answer is: '+  FirstNumber / SecondNumber)
//        break;

//        default:
//            console.log('Invalid Input')
//     }


// // Output:
// // The answer is: 8



// // Calculator:

// const fNum = 1
// const sNum = 2
// const sign = '/'

// switch(sign) {
//    case '+':
//         console.log(`result: ${fNum + sNum}`)
//         break
//     case '-':
//         console.log(`result: ${fNum - sNum}`)
//         break
//    case '*':
//         console.log(`result: ${fNum * sNum}`)
//         break
//    case '/':
//         console.log(`result: ${(fNum / sNum)}`)
//         break
//     default:
//         console.log('Invalid Input')
// }  


// // Output:
// // 0.5

//-------------------------------------------------------------
// 12/8
const n1 = 6;
const n2 = 2;
const operator = '*'


switch(operator){
   case '+':
     console.log(`${n1} + ${n2} = ${n1 + n2}`)
     break;
   case '-':
        console.log(`${n1} - ${n2} = ${n1 - n2}`)
        break;
   case '*':
        console.log(`${n1} * ${n2} = ${n1 * n2}`)
        break;
   case '+':
     console.log(`${n1} / ${n2} = ${n1 / n2}`)
     default:
     console.log('Error')

}