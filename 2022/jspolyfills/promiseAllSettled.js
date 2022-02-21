
Promise.prototype.allSettled = function(promises) {
    const resolvedPromises = promises.map(promise => {
        return promise.then(value => {
            return {
                status : "fullFilled",
                value : value
            }
        })
        .catch(e => {
            return {
                status : "rejected",
                reason : e 
            }
        })
    });
    return Promise.all(resolvedPromises);
}

/*
Another version using async and await
*/
async function allR(promises) {
    const res = []
    for (const promise of promises) {
        try {
            const ret = await promise;
            res.push({
                status: "fullFilled",
                value: ret
            })
        } catch (e) {
            res.push({
                status: "rejected",
                reason: e
            })
        }
    }
    return res;
}


async function allRUsingFor(promises) {
    const res = []
    for (let i = 0; i < promises.length; i++) {
        const promise = promises[i]
        try {
            const ret = await promise;
            res.push({
                status: "fullFilled",
                value: ret
            })
        } catch (e) {
            res.push({
                status: "rejected",
                reason: e
            })
        }
    }
    return res;
}
