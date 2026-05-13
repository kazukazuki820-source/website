// Online Javascript Editor for free

// Write, Edit and Run your Javascript code using JS Online Compiler

function fizzbuzz (n) {

if (n%5 === 0){

    console.log("\"Buzz,\"");

}

else if (n%3 ===0){

    console.log("\"Fizz,\"");

}

else if (n%15 ===0){

    console.log("\"FizzBuzz,\"");

}

else {

    console.log(n+",");

}
 
}

for (let i = 1;i<20;i++){

    fizzbuzz(i);

}
 