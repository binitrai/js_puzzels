
Function.prototype.newBind = function(context, ...args) {
    const fn = this;
    return function bound(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    }
}
