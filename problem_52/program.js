/*Given a list L of video names and their watch rates, 
write a function that will return the videos with the top 10 watch rates.
Video names may appear more than once.Example:
L = [(‘abc’, 10), (‘def’, 15), (‘ghi’, 10), (‘abc’, 12), …, (‘xyz’,100)]
The function should return [‘xyz’, ‘abc’, …, ‘def’, ‘ghi’]
*/

const topTenRatedMovies = (L) => {
    const length = L.length;
    const map = {};
    for (let i = 0; i < length; i++) {
        let [k, v] = L[i];
        if (typeof map[k] == "undefined") {
            map[k] = [0,0];
        }
        map[k][0] += v;
        map[k][1]++;
    }
    let sorted_list = Object.keys(map).sort((a, b) => {
        return (map[b][0] / map[b][1]) - (map[a][0] / map[a][1]);
    })
    return sorted_list.slice(0, 10);
}
