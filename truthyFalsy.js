// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

console.log(Boolean(0)); // falsy
console.log(Boolean('')); // falsy
console.log(Boolean(undefined)); // falsy
console.log(Boolean(null)); // falsy
console.log(Boolean(NaN)); // falsy
console.log(Boolean(1)); // true

// Truthy and Falsy Value in Condition
const money = 0;
if(money){
    console.log("Do't spend it all.");
}else{
    console.log("You should get a job.");
}