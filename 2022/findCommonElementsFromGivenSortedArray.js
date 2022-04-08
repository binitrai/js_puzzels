var findCommon = (list1, list2, list3) => {
    const l1 = list1.length;
    const l2 = list2.length;
    const l3 = list3.length;

    let i = 0;
    let j = 0;
    let k = 0;

    const commonElements = [];
    while (i < l1 && j < l2 && k <l3) {
        if (list1[i] === list2[j] && list2[j] === list3[k]) {
            commonElements.push(list1[i]);
            i++;
            j++;
            k++;
        } else {
            const min = Math.min(list1[i], list2[j], list3[k]);
            min === list1[i]  && i++;
            min === list2[j] && j++;
            min === list3[k] && k++;
        }              
    }
    return commonElements
}

var ar1 = [1, 5, 10, 20, 40, 80];
var ar2 = [6, 7, 20, 80, 100];
var ar3 = [3, 4, 15, 20, 30, 70, 80, 120];

findCommon(ar1, ar2, ar3)
