const n = 5

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= (n-i); j++){
        console.log(' ')
    }
    for (let k = 1; k <= ((2*i)-1); k++){
        console.log('*')
    }
    console.log(' ')
}

for(let i = 1; i <= n-1; i++){
    for (let j = 1; j <= i; j++){
        console.log(' ')
    }
    for (let k = 1; k <= (((n-i) * 2)-1); k++){
        console.log('*')
    }
}

// Output:
 
 


// *




// *
// *
// *



// *
// *
// *
// *
// *


// *
// *
// *
// *
// *
// *
// *

// *
// *
// *
// *
// *
// *
// *
// *
// *


// *
// *
// *
// *
// *
// *
// *


// *
// *
// *
// *
// *



// *
// *
// *




// *