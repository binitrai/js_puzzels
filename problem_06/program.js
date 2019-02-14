/*
Minimum distance between 2 words counting the number of characters from 
middle of both words. E.g. ABC is XYZ and ABC & XYZ are two distinct words. 

EG : 
the quick the brown quick brown the frog  (frog brown)
findShortestDistance("frog", "brown", "the quick the brown quick brown the frog")
*/

const findShortestDistance = (str1, str2, strs) => {
    strs = strs.split(" ")
    let distance = Number.MAX_SAFE_INTEGER;
    let temp = null;
    let index = 0;
    for(let i=0; i<strs.length; ++i) {
      if(str1 == strs[i] || str2 == strs[i]) {
         if(temp != null && strs[i] != temp) {
            let temp_distance = calcMidDistance(index, i, strs, temp);
            distance = Math.min(distance, temp_distance);
         }
         temp = strs[i];
         index = i;
       }
    }
    return distance;
}

const calcMidDistance = (index, i, strs, temp) => {
    let all_words_inbetween = strs.slice(index + 1, i - 1).join(" ").length;
    return parseInt(temp.length/2) + parseInt(strs[i].length/2) + all_words_inbetween + 2;
}

// 1. Walk trhough each word in given string
// 2. Check if it is matches with any word either word1 or word2
// 3. store the first index if any word found 
// 4. Next compare if you have another word
// 5. Extract minimum distance from stored distance and current i-index
// 6. Return difference