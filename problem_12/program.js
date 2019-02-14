/*
Return element from a Pascal Traingle - Given 5,2 as input return 2nd element from 5th row
*/

const returnPascalElement = (n, c) => {
    const trangle = [];
    for (let i = 0; i < n; i++) {
        trangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                trangle[i][j] = 1;
            } else {
                trangle[i][j] = trangle[i-1][j-1] + trangle[i-1][j];
            }
        }
    }
    return trangle[n-1][c-1];
} 