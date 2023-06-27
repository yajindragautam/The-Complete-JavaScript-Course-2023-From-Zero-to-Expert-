'use strict'
// Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the Strict mode.

// Strict mode can be activated using 'use strict'
// 'use strict' have be always top of the file

let hasDriversLicense = false;
const passTest = true;
//if(passTest) hasDriverLicense = true; // 'use strict' throw error here otherwise you will not get error 
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive: D');