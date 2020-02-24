const Calculator = require('./Calculator');
const MathOperations = require('./MathOperations');

class Statistics extends Calculator{

    Variance(a,b) {
        this.Subtract(a,b);
    }

}
module.exports = Statistics;