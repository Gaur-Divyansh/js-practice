// let i = 0;
// while(++i < 5) console.log(i);

// i = 0;
// while (i++ < 5) console.log(i);

// for(let i = 0;i < 5;i++) console.log(i);
// for(let i = 0;i < 5;++i) console.log(i);

// for(let i = 0;i <= 10;i++){
//     if(i%2 == 0) console.log(i);
// }

//replace for with while

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while(i < 3){
//     console.log(`number ${i}`);
//     i++;
// }

// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for(let j = 2; j < i;j++){
        if(i%j == 0) continue nextPrime;
    }
    console.log(i);  
}




