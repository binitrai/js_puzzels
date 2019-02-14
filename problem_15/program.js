/*
Find out the number of pair from given integer array whose sum isequal to a given number
*/

// 1. First approach is brouteforce
// 2. Use to loop to walk through each item of the Array
// 3. Store in result if 2 elements produce target sum

const numberSumPairFromArray = (list, target_number) => {
    const result = [];
    const length = list.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (list[i] + list[j] === target_number) {
                result.push([list[i], list[j]]);
            }
        }
    }
    return map;
}

/*
1. We can think about dynamic approach
2. Prepare a hash map
3. Key of map will be the target_sum - current number
4. Value will be current number
5. Like map[target_sum-current] =  current
6. If any key found in map with current elment then it is a pair
7. Store current pair in result as map[current] and current element
3. Return the stored result array.
*/


const numberSumPairFromArray = (list, target_sum) => {
    const length = list.length;
    const result = [];
    const map = {};
    for (let i = 0; i < length; i++) {
        if (typeof map[list[i]] == "undefined") {
            map[target - list[i]] = list[i]
        } else {
            result.push([map[arr[i]], arr[i]])
        }
    }
    return map;
}
