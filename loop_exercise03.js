
//part 1
let xValue = 3;
while (xValue >= 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
}

//part 2
const oodNumbers = [];
for(let i=0; i < 100; i++) {
    if ( i%2 === 1 ) {
        oodNumbers.push(i);
    }
}

console.log(oodNumbers);

//part 3
 let numbers = '';
 const n1 = 6;
 let i = 1;
 while ( i <= n1 ) {
    numbers = numbers + `[${i}] `;
    i++;
 }

 console.log(numbers);

 //part 4
 let sum = 0;
 const n2 = 19;
 let j = 0;
 while (j <= n2) {
    sum = sum + j ;
    j++;
 } 

 console.log(sum);