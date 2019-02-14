/*
Given an m*n matrix, print the matrix in reverse spiral form usingrecursion.
123
456
789

Spiral Form
123698745

Reverse Spiral form
321478965
*/

const sprialTraverse = (matrix, result) => {
    // declare base case
    if (matrix.length && matrix[0].length) {
        // remove first row
        result = result.concat(matrix.shift());

        matrix.forEach(element=> {
            result.push(element.pop());
        });
        matrix = reverseMatrix(matrix);
        return sprialTraverse(matrix, result);
    }
    return result;

}

const reverseMatrix = (matrix, soft) => {
   soft = soft || false;
   matrix.forEach(element => {
       return element.reverse();
   });
   if (soft) {
       return matrix;
   }
   matrix.reverse();
   return matrix;
}

// print in reverse spiral
const reverseSpiralTraverse = (matrix) => {
    matrix = reverseMatrix(matrix, 1);
    let result = [];
    return sprialTraverse(matrix, result);
}