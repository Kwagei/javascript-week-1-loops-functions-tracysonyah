//Two numbers are given write a function that prints the gratest common divisor of those numbers.
// var num1 = 22;
// var num2 = 33;

function gcd(a, b) {
    while (b !== 0) {
        remainder = a % b;
        a = b;
        b = remainder;
    }
    console.log(a)
}
gcd(2,4);