console.log("test");
var debug=true;
if (debug===true)
{
    console.log("This is my useful information.");
}

var yearlySalary = function(monthlySalary, bonus, workerType) {
    if (workerType === "Manager")
    {
        bonus = bonus * 2;
    }
    var yearlySalary = monthlySalary * 12 + bonus;
    console.log("The yearly salary: "+ yearlySalary);
};
yearlySalary(500, 37, "Manager");