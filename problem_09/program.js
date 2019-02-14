/*
Print matrix in spiral form e.g. {{1,2,3},{4,5,6},{7,8,9}} Output . 1,2,3,6,9,8,7,4,5
*/

const sTraverse = (matrix, result) => {
    if (matrix.length && matrix[0].length) {
        // remove first row
        result = result.concat(matrix.shift());
        // move down
        matrix.forEach(element => {
            result.push(element.pop());
        })

        // Now reverse the matrix
        matrix = reverseMatrix(matrix);
        return sTraverse(matrix, result);
    }
    return result;
}

const reverseMatrix = (matrix) => {
    matrix.forEach(element => {
        element.reverse();
    });
    return matrix.reverse();
}