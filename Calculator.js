const MathOperations = require('./functions/MathOperations');

class Calculator {

    Add(a,b) {
        return this.result = MathOperations.sum(a, b);
    }
    Subtract(a,b) {
        return this.result = MathOperations.difference(a,b);
    }
    Divide(a,b) {
        return this.result = MathOperations.quotient(a,b);
    }
    Multiply(a,b) {
        return this.result = MathOperations.product(a,b);
    }
    Square(a) {
        return this.result = MathOperations.square(a);
    }
    SquareRoot(a) {
        return this.result = MathOperations.squareRoot(a);
    }
    SumList(array) {
        return this.result = MathOperations.sumList(array);
    }
}
module.exports = Calculator;