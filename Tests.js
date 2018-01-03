var test = require('unit.js');
var app = require('./App.js');

describe('find_max_product', function() { 

    /**
     * Tests to see if `find_max_product` takes an array and returns the correct product. 
     */
    it('Can take array and return product', function() { 
        
        var arr = [1, 3, 5, 7, 9, 14, 11, 92, 12, 45, 104, 96];
        var ret = app.find_max_product(arr);

        test.number(ret).isEqualTo(918528);
    });

    /**
     * Tests to see if `find_max_product` returns false on arrays with lengths smaller than 3. 
     */
    it('Takes smaller array and returns false', function() { 

        var arr = [45, 46];
        var ret = app.find_max_product(arr);

        test.value(ret).is(false);
    });

    /**
     * Tests to see if `find_max_product` returns false on empty arrays. 
     */
    it('Takes empty array and returns false', function() { 

        var arr = [];
        var ret = app.find_max_product(arr);

        test.value(ret).is(false);
    });

    /**
     * Tests to see if `find_max_product` takes a wrong type and returns false.
     */
    it('Can take wrong type and return false', function() { 

        var fun = function() { };
        var ret = app.find_max_product(fun);

        test.value(ret).is(false);
    });

    /**
     * Tests to see if `find_max_product` takes an array of negatives and returns the correct product. 
     */
    it('Can take an array of negatives', function() { 

        var arr = [-5, -14, -17, -45, -76, -15, -16, -11];
        var ret = app.find_max_product(arr);

        test.number(ret).isEqualTo(-770);
    });

    /**
     * Tests to see if `find_max_product` takes a mixed array of negatives and positives and returns the correct product. 
     */
    it('Can take a mixed array of negative and positive values', function() {

        var arr = [11, -92, 12, -10, 45, -22, -14];
        var ret = app.find_max_product(arr);

        test.number(ret).isEqualTo(91080);
    });

    /**
     * Tests to see if `find_max_product` takes an array with a decimal value and returns false. 
     */
    it('Can take an array with decimal and return false', function() { 
        var arr = [11, -92, 12.2, -10, 45, -22, -14];
        var ret = app.find_max_product(arr);

        test.value(ret).is(false);
    });

    /**
     * Tests to see if `find_max_product` takes an array with garbage values and returns false. 
     */
    it('Can take an array with wrong types and return false', function() { 
        var arr = [1 ,2, -12, 14, true, false, [], {}, NaN, undefined];
        var ret = app.find_max_product(arr);

        test.value(ret).is(false);
    });

    /**
     * Tests to see if `find_max_product` takes an undefined value and returns false. 
     */
    it('Can take undefined and return false', function() {
        var ret = app.find_max_product(undefined);

        test.value(ret).is(false);
    });

    /**
     * Tests to see if `find_max_product` can calculate the positive value of two negatives correctly. 
     */
    it('Can calculate the positive value of two negatives', function() {

        var arr = [-20, 10, -10];
        var ret = app.find_max_product(arr);

        test.number(ret).isEqualTo(2000);
    });
});