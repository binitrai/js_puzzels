
/*
Write a method for ATOI functionality (ASCII to Integer conversion)
*/
const atoi = (str) =>  {
  let last = str[str.length-1].charCodeAt(0) - 48;
  let last = (str[0] == "-" && last * -1) || last
  let new_str = str.slice(0,str.length-1);
  return (new_str != "" && new_str != "-") && (10 * atoi(new_str) + last) || last;
};