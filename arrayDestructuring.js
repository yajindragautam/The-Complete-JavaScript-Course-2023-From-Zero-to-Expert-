'use strict'

const restaurant = {
    name:"Himalyan Momo",
    location:"Mahalaxmi, Tikathali",
    categories:["Italian","Pizzeria","Vegetarian","Organic"],
    startMenu:["Focaccia","Bruschetta","Garlic Bread","Caprese Salad"],
    mainMenu:['Pizza',"Pasta","Risotto"],
}

// Fetuch name
const {name} = restaurant;
console.log(name);

//Fetch inner data and skip value
let [main, ,second] = restaurant.categories;
console.log(main,second);

// Switch variables
[main, second] = [second,main];
console.log('Value of switching : ',main,second);

// Nested Destructuring
const nested = [2,4,[5,6]];
// Destructure inner arrat
const [i, ,j] = nested
console.log(i,j); // 2, [5,6]
// Destructure evert element

/*
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;
*/
