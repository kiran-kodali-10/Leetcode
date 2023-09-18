/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while(1){

        // Case 1: Root is greater than both p and q.
        if(root.val>p.val && root.val>q.val) root = root.left;
        // Case 2: Root is less than the both p and q
        else if(root.val<p.val && root.val<q.val) root = root.right;
        // If not return the root
        else return root;
    }
};