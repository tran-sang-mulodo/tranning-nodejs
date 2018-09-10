// Rest Parameters
function f1(...params) {
    console.log(params.length);
}

f1();
f1(1);
f1(1, 2);
f1(1, 2, 3);

// Anonymous function
var func = function (x, y) {
    return x * y
};

function product() {
    var result;
    result = func(10, 20);
    console.log("The product : " + result)
}

product()

// function constructor
var test = new Function("x", "y", "return x*y;");

function productTest() {
    var result;
    result = test(4, 5);
    console.log("The product :" + result)
}

productTest()

// Recursion and Javascript Functions
function factorial(num) {
    if (num <= 0) {
        return 1;
    } else {
        return (num * factorial(num - 1))
    }
}
console.log(factorial(6))