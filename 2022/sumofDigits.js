const findSumOfDigits = (num) => {
    let sum = 0;
    while(num) {
        sum +=  num % 10;
        num = parseInt(num / 10);
    }
    return sum;
}
