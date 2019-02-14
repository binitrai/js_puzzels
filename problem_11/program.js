/*
Largest palindrome in a given string
Brouteforce approach
1. use to loop
2. First from i and then 2nd from i+ 1
3. Check if lenght is greater than 2 && string is palindrome 
4. compare with the last stored palindrom length
5. If current palindrome is greater than previous 
6. Then replace the previous by current palindrome string


forgeeksskeegfor
*/

const isPalindrom = (str) => {
    return str == [...str].reverse().join("");
}

const longestPalindrome = (str) => {
    const length = str.length;
    let palindrom = "";
    for (let i = 0; i < length; i++) {
        temp = str[i];
        for (let j = i + 1; j < length; j++) {
            temp += str[j];
            let len = temp.length;
            if (temp.length > 2 && isPalindrom(temp)) {
                if (len > palindrom.length) {
                    palindrom = temp;
                }
            }
        }
    }
    return palindrom;
}