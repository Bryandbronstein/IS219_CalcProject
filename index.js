const sum = require('./functions/sum');
const subtract = require('./functions/subtract');
const multiply = require('./functions/multiply');
const divide = require('./functions/divide');
const square = require('./functions/square');
const squareroot = require('./functions/squareroot');

a = 3;
b = 6;
d = 36;

c = sum(a,b);
console.log(a + " plus " + b + " equals " + c);

c = subtract(b,a);
console.log(b + " minus " + a + " equals " + c);

c = multiply(a,b);
console.log(a + " multiplied by " + b + " equals " + c);

c=divide(b,a);
console.log(b + " divided by " + a + " equals " + c);

c=square(a);
console.log(a + " squared equals " + c);

c=squareroot(d);
console.log("Square root of " + d + " equals " + c);


