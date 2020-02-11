const sum = require('./sum');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract');
const square = require('./square');
const squareroot = require('./squareroot');

class MathOperations {
    static sum(a,b) {
        return sum(a,b);
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
    static difference (a,b){
        return subtract(a,b);
    }
    static square (a){
        return square(a);
    }
    static squareRoot (a){
        return squareroot(a);
    }
    static sumList(array = []) {
        let result = 0;
        array.forEach(function (item) {
            result = sum(result, item);
        });
        return result;
    }

}

module.exports = MathOperations;