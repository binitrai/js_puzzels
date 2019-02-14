/*Average grade problem  
input [ ["sobby",87], ["arush", 37],["tony", 24],["charles",22]] , 
here best grade is 87 which is output
*/

const avgGrade = (arr) => {
    const length = arr.length;
    let map = {};
    for (let i = 0; i < length; i++) {
        let [key, val] = arr[i];
        if (typeof map[key] == "undefined") {
            map[key] = [0,0];
        }
        map[key][0] = map[key][0] + val;
        map[key][1] = map[key][1] + 1;
    }
    let max_grade = 0;
    for (let i in map) {
        let temp = map[i][0] / map[i][1];
        if (temp > max_grade) {
            max_grade =  temp;
        }
    }
    return max_grade;
}