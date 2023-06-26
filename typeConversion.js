// TYPE CONVERSION

// Convert String To Number
const inputYear = '2023';
console.log(Number(inputYear) + 2);

// Convert un-convertable data to numberr
console.log(Number('Yajindra')); // output: Nan -> Not a number but it  type still remain Number

// Convert Number to String
console.log(String(55) + 55);

// TYPE COERCION - happen auto in js
console.log('I am '+ 23 + ' years old'); // convert to string
console.log('23' - '10' - 3); // convert to number
console.log('23' * 3); // convert to number2
console.log('23' / 3); // convert to number