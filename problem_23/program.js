/*
"Given an array of Employees with name,marks. Find out the maximum average marks from the list.
{""Alia"",""-678""},
 {""Bobby"",""100""},
 {""Alex"",""223""},
 {""Alex"",""-23""},
 {""Bobby"",""723""}
 };
 Avg Bobby = 315,Alex= 100,Alia=-678. Result: 315"
*/

const getMaximumAvgResult = (list) => {
    const result = {};
    const length = list.length;
    for (let i = 0; i < length; i++) {
        if (typeof result[list[i][0]] == "undefined") {
            result[list[i][0]] =  list[i][1];
        } else {
            if (list[i][i] >= result[list[i][0]]) {
                result[list[i][0]] = list[i][1];
            }
        }
    }
    let arr = Object.values(result);
    arr_sum = arr.reduce((a,b) => a+b);
    return arr_sum/arr.length;
}

