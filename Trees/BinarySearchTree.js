// // Binary Search Tree is a node-based binary tree data structure which has the following properties:

// // The left subtree of a node contains only nodes with keys lesser than the node’s key.
// // The right subtree of a node contains only nodes with keys greater than the node’s key.
// // The left and right subtree each must also be a binary search tree.


// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while(true){
//             if(value === current.value) return undefined;
//             if(value < current.value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 } 
//                 current = current.right;
//             }
//         }
//     }
//     find(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }
//         if(!found) return undefined;
//         return current;
//     }
//     contains(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
//     BFS(){
//         var node = this.root,
//             data = [],
//             queue = [];
//         queue.push(node);

//         while(queue.length){
//            node = queue.shift();
//            data.push(node.value);
//            if(node.left) queue.push(node.left);
//            if(node.right) queue.push(node.right);
//         }
//         return data;
//     }
//     DFS(){
//         let node = this.root;
//         let data = [];
//         let queue = [];
//         queue.push(node);
//         while(queue.length){
//             node = queue.shift();
//             data.push(node);
            
//         }
//     }
// }


// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// let bfsOrder = tree.BFS();
// console.log(bfsOrder)
    
