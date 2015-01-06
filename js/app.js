var vatCalculator = function (netPrice, tax) {
    var grossPrice = netPrice * tax;
    console.log("The gross price is: " + grossPrice);
};

var costOfBread = 5;
var costOfButter = 3;
var costOfMilk = 4;

var tax = 1.27;

vatCalculator(costOfBread, tax);
vatCalculator(costOfButter, tax);
vatCalculator(costOfMilk, tax);