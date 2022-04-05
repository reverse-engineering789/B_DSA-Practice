let FirstNumber = 2
let Operation = '*'
let SecondNumber = 4

switch(Operation){
    case '+':
        console.log('The sum of two numbers is: ' + FirstNumber + SecondNumber)
       break;
    
    case '-':
        console.log('The answer is: '+  FirstNumber - SecondNumber)
       break;
    
       case '*':
        console.log('The answer is: '+  FirstNumber * SecondNumber)
       break;
    
       case '/':
        console.log('The answer is: '+  FirstNumber / SecondNumber)
       break;

       default:
           console.log('Invalid Input')
    }


// Output:
// The answer is: 8