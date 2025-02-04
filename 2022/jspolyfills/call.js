Function.prototype.customCall = function(context, ...params) {
    // Temporarily set the function as a method of the context
    context.fnRef = this;
    // Invoke the function with the provided arguments and store in result
    const result = context.fnRef(...params);
    // Clean up by deleting the temporary method
    delete context.fnRef;
    // Return the result
    return result;
}
