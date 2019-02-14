//maximum grade problem:  [ ["sobby",87], ["arush", 37],["tony", 24],["charles",22]];

function maxGradeProblem(arr) {
    arr.sort((a, b) => {
        return a[1] - b[1];
    });
    return arr.pop();
}
