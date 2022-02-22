
class PromiseNew {
    constructor(executor) {
        let onResolve;
        let onReject;
        let fullfilled = false;;
        let rejected = false;
        let called = false;
        let value;

        this.resolve =  function (value) {
            fullfilled =  true;
            value = value;
            if (typeof onResolve === "function") {
                onResolve(value);
                called = true;
            }
        }
    
        this.reject = function(reason) {
            rejected = true;
            value = reason;
            if (typeof onReject === "function") {
                onReject(value);
                called = true;
            }
        }
    
        this.then = function(callback) {
            onResolve = callback;
            if (fullfilled && !called) {
                called = true;
                onResolve(value);
            }
            return this;
        }
    
        this.catch = function(callback) {
            onReject = callback;
            if (rejected && !called) {
                called = true;
                onReject(value);
            }
            return this;
        }
        try {
            executor(this.resolve, this.reject)
        } catch (err) {
            this.reject(err);
        }
    }

}


// own implementation
// need to add called condition from above code if it is asked about promise chaining

function PromiseCustom(promiseCallBack) {
    let promiseState = "<pending>";
    let value;
    let successCallBack;
    let rejectionCallBack;
    

    this.then = function(callback) {
        successCallBack = callback;
        if (promiseState === "<fullfilled>") {
            successCallBack(value)
        }
        return this;
    }

    this.catch = function(callback) {
        rejectionCallBack = callback;
        if (promiseState === "<rejected>") {
            rejectionCallBack(value)
        }
        return this;
    }

    function resolveHandeler(value) {
        promiseState = "<fullfilled>";
        value = value;
        if (typeof successCallBack === "function") {
            successCallBack(value);
        }
    }

    function rejectHandeler(value) {
        promiseState = "<rejected>";
        value = value;
        if (typeof rejectionCallBack === "function") {
            rejectionCallBack(value);
        }
    }


    try {
        promiseCallBack(resolveHandeler, rejectHandeler)
    } catch(err) {
        rejectHandeler(err)
    }
}
