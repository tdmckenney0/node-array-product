module.exports = {
    /**
     * find_max_product
     * 
     * Function that takes an array of integers and returns the product of the largest 3 values.
     * 
     * @author Tanner Mckenney <tmckenney7@outlook.com>
     * 
     * @param Array arr - an array of integers. 
     * 
     * @returns Integer - The product of the three largest values. 
     */
    find_max_product: function(arr) {
        if (!(arr instanceof Array) || arr.length < 3 || !arr.every(x => Number.isInteger(x))) {
            return false;
        }

        arr.sort(function(a, b) { 
            return a - b;
        });

        var largest = arr.slice(-3).reduce(function(acc, cur) { 
            return acc * cur;
        });

        var smallest = arr.slice(0, 2);
        
        smallest.push(arr.slice(-1).pop());
        
        smallest = smallest.reduce(function(acc, cur) { 
            return acc * cur;
        });
    
        return (largest >= smallest) ? largest : smallest;
    }
};