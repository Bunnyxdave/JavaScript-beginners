//baby programs for logic building #7
// first 10 prime numbers

function printFirstNPrimes(n = 10) {
    let count = 0;
    let num = 2;
    while (count < n) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
            count++;
        }
        num++;
    }
}

printFirstNPrimes(); // Prints the first 10 prime numbers.



//baby programs for logic building #8
// Fibonacci Sequence

function Fibo(n) {
    let result=[];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return result;
}       
console.log(Fibo(10)); // Prints the first 10 Fibonacci numbers.


//baby programs for logic building #9
//n(n+1)(n-1) where n=1,0; n>1,infinite. 

function Expression(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i * (i + 1) * (i - 1));
    }   
    return result;
}
console.log(Expression(10)); // Prints the result of the expression for the first 10 natural numbers.



//baby programs for logic building #10
// Factorial

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }

}
console.log(factorial(5)); // Prints the factorial of 5.



