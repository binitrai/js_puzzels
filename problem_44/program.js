// Prime factorizaton
function isPrime(n) {
    if (n === 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeFactors(num) {
    let factors = [];
    for (let i = 0; i < num; i++) {
        if (num % i === 0 && isPrime(i)) {
            factors.push(i);
        }
    }
    return factors;
}

// another effective method to getting all prime factors

function getAllFactorsFor(remainder) {
    let factors = [];
    for (let i = 2; i <= remainder; i++) {
        while ((remainder % i) === 0) {
            factors.push(i);
            remainder /= i;
        }
    }
    return factors;
}
