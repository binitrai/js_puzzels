/*
Given an unsorted list and and one target item
1. Find all the position of target item if list is sorted

EG : list = [2,5,1,4] , item = 1 
ANS : [1];


EG : list = [12,5,1,4, 5] , item = 5
ANS : [2,3];
*/

/*
Approach :
- take one counter and init it with -1;
- take one frequencyCounter and update if we find same number in the list
 - iterate over the list
 - if item is less or equal than correct element then increase the count
 - if frequencycounter has more than 1 element then return an array with corrent counter and updated count
*/

function getPosition(list, item) {
    let position = -1;
    let frequencyCounter = 0;
    for (let i = 0; i < list.length; i++) {
        if (item >= list[i]) {
            position += 1;
            if (item === list[i]) {
                
                if (frequencyCounter !== 0) {
                    position -= 1;
                }
                frequencyCounter += 1;
            }
        }
    }

    if (frequencyCounter === 0) {
        return [-1]
    } else {
        const ret = [position];
        for (let i = 1; i < frequencyCounter; i++) {
            ret.push(++position);
        }
        return ret;
    }
}



// TestCases
const list = [6,2,4,5,4, 9, 4];

console.log(getPosition(list, 9)) // [6]
console.log(getPosition(list, 2)) // [0]
console.log(getPosition(list, 3)) // [-1]
console.log(getPosition(list, 4)) // [1,2,3]
