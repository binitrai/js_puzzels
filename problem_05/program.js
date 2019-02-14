//Set of anagrams of list of words. The output should be words which are anagrams from the list should be grouped together.



// let input = ["cat", "dog", "tac", "god", "act"];

// groupAnagram(input)

// output

// [["cat", "tac", "act"], ["dog", "god"]]

function groupAnagram(arr) {
   let map = {};
   for (let i in arr) {

     let current = arr[i];
     let sorted = [...current].sort().join("");
     if (typeof map[sorted] == "undefined") {
        map[sorted] = [];
     } 
     map[sorted].push(current);
   }
   return Object.values(map);
}