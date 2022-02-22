// MDN doc
function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      // pop value from stack
      const next = stack.pop();
      if (Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // reverse to restore input order
    return res.reverse();
  }


  // my own simple approach without doing any fancy thing
  function flattenArray(list, result = []) {
    for (let i = 0; i < list.length; i++) {
        if (Array.isArray(list[i])) {
            flattenArray(list[i], result);
        } else {
            result.push(list[i])
        }
    }
    return result;
  }


  // Another versopn using reduce

  function flattenUsingReduce(list) {
    return list.reduce((acc, curr) => {
      return acc.concat(Array.isArray(curr) ? flattenUsingReduce(curr) : curr)
    }, [])
}


// using Generator


// simple for loop will not work
// need to study why
function* flattenArrayGen(list) {
    for (const item of list) {
        if (Array.isArray(item)) {
            yield* flattenArrayGen(item);
        } else {
            yield item;
        }
    }
}

const a = [...flattenArrayGen([1,2,[2, [3,4,[5]], [6]]])];
console.log(a);
