/** 
 * Check if a number is a power of another number
*/

const isPower = (x, y) => {
    while(x % y == 0) {
       x = x / y;
    }
    return x == 1;
}