/*
Program to add two fraction number
*/

const addFraction = (a1, a2, b1, b2) => {
    // find the lcm of a2 and b2
    // add by multiplying each element lcm * a1 + lcm * b1
    // return lowest of additionresult / lcm
    let gcd_of_n = gcd(a2, b2);
    let lcm = parseInt((a2 * b2) / gcd_of_n);
    let sum = (lcm/a2) * a1 + (lcm/b2) * b1;
    return lowest(sum, lcm);
}

const gcd = (a, b) => {
    if (a == 0) {
        return b;
    }
    return gcd(b%a, a);
}

const lowest = (a, b) => {
    let common_factor = gcd(a, b);
    return [a/common_factor, b/common_factor]
}