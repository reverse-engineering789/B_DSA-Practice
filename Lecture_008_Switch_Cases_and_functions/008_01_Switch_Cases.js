// let num = 2

// switch(num){
//     case 1:
//         console.log('First')
//     break;

//     case 2:
//         console.log('Second')
//     break;

//     case 3:
//         console.log('three')
//     break;

//     default:
//         console.log('Unknown')
// }


// Output:
// Second
// //-------------------------------------------

// nested switch statements 

let num = 'A'

switch (num){
    case 1: 
       console.log('First')
       break;
    
    case 'A': switch (num){
        case 'A': console.log('value of num is: ' + num)
        break;
    }
    break; 
    
    case 3:
        console.log('three')
        break;
    
    default:
        console.log('Its a default case')
    
    }

// Output:
// value of num is: A