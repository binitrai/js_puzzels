/**
 * Find the nth Number in fibonacci series using Iterative and Recursive Approach.
 *0 1,2,3,5,8,13,20
*/

function fibRecusrsive(n) {
    if (n < 2){
      return n
    }
    return fibRecusrsive(n - 1) + fibRecusrsive (n - 2)
  }

const fibIncremental = (n) => {
    if (n === 0) {
        return 0;
    }
    const series = [0,1];
    for (let i = 2; i <= n; i++) {
        series[i] =  series[i-1] + series[i-2];
    }
    return series.pop();
}
// while is the best approach
function fibIncrementalByWhile(n) {
    let a = 1;
    let b = 0;
    let temp = 0;
    while(n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num --;
    }
    return b;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter the number`, (n) => {
    let n = parseInt(n);
    fibIncremental(n);
    readline.close()
  })