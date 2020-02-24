const Calculator = require('./Calculator');
const MathOperations = require('./MathOperations');

class Statistics extends Calculator{

    Variance(a,b) {
        return this.Subtract(a,b);
    }
    Mean(array){
        let sum = this.Add(array);
        let arrayLength = array.length;
        return this.Divide(sum, arrayLength);
    }
}
module.exports = Statistics;