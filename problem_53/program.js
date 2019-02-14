/*
Given n size unsorted array, find its mean and median.
*/

const findMinMedian = (list) => {
    const length  = list.length;
    let mean = list.reduce((a, c) => a + c) / length;
    list = list.sort();
    let median = 0;
    if (length % 2 !== 0) {
        median = list[(length-1)/2];
    } else {
        median = (list[(length - 2)/2] +  list[length/2]) / 2;
    }
    return [mean, median];
}






