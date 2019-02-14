var stack1 = [];
var stack2 = [];
function enqueue(ele){
//if dequeue was called before, all the elements would be in stack2, so to maintain the order
//push elements into stack1 before performing the actual enqueue operation
	if(stack2.length>0){ 
		var len = stack2.length;
		for(var i=0;i<len ; i++){
			var p= stack2.pop()
			stack1.push(p);
		}
    }
	stack1.push(ele);
}
function dequeue(ele){
      // if dequeue was called consecutively, all the elements would be in stack2
	if(stack2.length>0){
		stack2.pop();
    }
       // if enqueue was called right before this dequeue, stack2 is empty
	else if(stack2.length===0){
		if(stack1.length===0){ // if the first operation is dequeue itself
			return "Queue is empty";
		}
		else if(stack1.length===1){ // if a single operation as enqueue was performed
			return stack1.pop();
		}
        // if enqueue was called before this operation, all the elements are in stack1,
        // so pop them and push the elements into stack2,  then pop()
		else if(stack1.length>0){
			var len = stack1.length
			for(var i=0;i< len ; i++){
				var p= stack1.pop()
				stack2.push(p);
			}
			return stack2.pop();
		}
	}
}


Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue(); 