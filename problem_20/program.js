/*
Given node in Binary Search tree,
 write the implementation for Put , Contains and InOrder methods.
*/

function Node (val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}
BinarySearchTree.prototype.insert  =  function(val){
    // store root value in a variable
    let root = this.root;

    // check if node is not available in the tree
    // then insert the value at the root node and return the function
    if (!root) {
        this.root = new Node(val);
        return;
    }

    let currentNode = root;
    let newNode = new Node(val);
    while(currentNode) {
        if (val < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

function preOrder(node, result) {
    if (node) {
        result.push(node.value);
        preOrder(node.left, result);
        preOrder(node.right, result);
    }
    return result;
}

function postOrder(node, result) {
    if (node) {
        postOrder(node.left, result);
        postOrder(node.right, result)
        result.push(node.value);
    }
    return result;
}

function inOrder(node, result) {
    if (node) {
        inOrder(node.left, result);
        result.push(node.value);
        inOrder(node.right, result);
    }
    return result;
}

function search(node, value) {
    if (node.value == value) {
       return "Found";
    }
    if (node.left != null && value < node.value) {
       return search(node.left, value);
    } else if (node.right != null && value > node.value){
       return search(node.right, value);
    } else {
       return "Not found";
    }
 }

 function findMin(node) {
     if (!node) {
         return 0;
     }
     if (node.left) {
         return findMin(node.left);
     }
     return node.value;
 }

 function maxNode(node) {
     if (!node) {
         return 0;
     }
     if (node.right) {
         return maxNode(node.right);
     }
     return node.value;
 }

 function isBST(root) {
    let res = inOrder(root);
    let res_str = res.join("");
    if (res_str === res.sort().join()) {
        return true;
    }  
    return false;
 }

 function isBstByInorder(node, result) {
    if (node) {
        isBstByInorder(node.left, result);
        if (result > node.value) {
            return false;
        } else {
            result = node.value;
        }
        isBstByInorder(node.right, result);
    }
    return true;
}

function height(node){
    if(!node) return 0;
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
 
    return Math.max(leftHeight, rightHeight) + 1;
 }