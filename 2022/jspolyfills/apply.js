Function.prototype.customApply = function(thisContext, args) {
    thisContext.fnRef = this;
    return thisContext.fnRef(...args)
}
