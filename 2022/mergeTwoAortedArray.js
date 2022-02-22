// without handelling corner cases
function mergeTwo(list1, list2) {
    const result = [];
    for (let i = 0, j = 0, k = 0; k < (list1.length + list2.length); k++) {

        if (list1[i] < list2[j]) {
            result[k] = list1[i];
            i++;
        } else {
            result[k] = list2[j];
            j++
        }
    }
    return result;
}


// with handelling corner cases
function mergeTwoCorrect(list1, list2) {
    const result = [];
    for (let i = 0, j = 0, k = 0; k < (list1.length + list2.length); k++) {

        let isArr1Depleted = i >= list1.length;
        let isArr2Depleted = j >= list2.length;

        if (!isArr1Depleted && (isArr2Depleted || list1[i] < list2[j])) {
            result[k] = list1[i];
            i++;
        } else {
            result[k] = list2[j];
            j++
        }
    }
    return result;
}


const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

cosole.log(mergeTwo(arr1, arr2)); // [1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, undefined]

// to handle undefined
console.log(mergeTwoCorrect(arr1, arr2)); // [1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, 20]


// Resource : https://wsvincent.com/javascript-merge-two-sorted-arrays/
