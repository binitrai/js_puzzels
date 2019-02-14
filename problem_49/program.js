// isPowerOfTen
//find number whether given no. is power of 10 or not
function isPowerOfTen(input) {
    while(input > 1) {
        if (input % 10 != 0) {
            return false;
        }
        input /= 10;
    }
    return input == 1;
}