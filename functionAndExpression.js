

// Function Declaratin
function calculateAge(age){
    return 2023 - age;
}

const age1 = calculateAge(2002);

// Function Expression
const calculateAge2 = function(age){
    return 2023 - age;
}
const age2 = calculateAge2(2000);

console.log(age1, age2); 