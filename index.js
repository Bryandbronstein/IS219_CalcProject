const sum = require('./sum');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const square = require('./square');
const squareroot = require('./squareroot');

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


