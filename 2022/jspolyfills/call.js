Function.prototype.customCall = function(context, ...params) {
    context.fnRef = this;
    return context.fnRef(...params)
}
