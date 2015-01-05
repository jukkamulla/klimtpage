console.log("test");
var debug=true;
if (debug===true)
{
    console.log("This is my useful information.");
}
var costOfBread = 5;
var costOfButter = 3;
var costOfMilk = 4;
var tax = 1.27;
var cost;
var message_of_result = "Value of sumcost:";

cost = costOfBread * tax;
console.log(message_of_result + cost);
cost += costOfButter * tax;
console.log(message_of_result + cost);
cost +=  costOfMilk * tax;
console.log(message_of_result + cost);
