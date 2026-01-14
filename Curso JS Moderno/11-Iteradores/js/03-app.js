//Fizz buzz

// 3 6 9 12 ... fizz

// 5 10 15 ... buzz

// 15 30 45 ... fizzbuzz

//recordar que el orden de las condiciones es importante
for( let i = 1; i < 100; i++ ) {
    if ( i % 15 ===0) {
        console.log(`${i} FizzBuzz`);
    } else if( i % 5 ===0) {
        console.log(`${i} Buzz`);
    } else if( i % 3 ===0) {
        console.log(`${i} Fizz`);}
    }