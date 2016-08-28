/**
 * TreeNode object
 * @param {string}   name
 * @param {TreeNode} parent
 */
function TreeNode(name, parent = undefined) {
    this.__leaves = [];
    this.__name   = name;
    this.__parent = parent;
}

/**
 * Adds a leaf
 * @param {TreeNode} leaf
 */
TreeNode.prototype.addLeaf = function(leaf) {
    this.__leaves.push(leaf);
}

/**
 * Returns the leaves
 * @return {array}
 */
TreeNode.prototype.leaves = function() {
    return this.__leaves;
}

/**
 * Returns the name
 * @return {string}
 */
TreeNode.prototype.name = function() {
    return this.__name;
}

/**
 * Returns the parent node
 * @return {TreeNode}
 * @throws {string}
 */
TreeNode.prototype.parent = function() {
    if (this.__parent) {
        return this.__parent;
    }

    throw 'the node "' + this.__name + '" is the root -> cannot find it\'s parent';
}

/**
 * Removes a leaf
 * @param {string} leafName
 * @throws {string}
 */
TreeNode.prototype.removeLeaf = function(leafName) {
    for (var index = 0; index < this.__leaves; index++) {
        // TODO rewrite this test
        if (
            this.__leaves[index].name === leafName
            && this.__leaves[index].leaves() === 0
        ) {
            this.__leaves.splice(index, 1);
            return;
        }

        if (this.__leaves[index].name === leafName) {
            throw 'cannot remove the leaf "' + leafName + '" from the node "' + this.__name + '" -> it\'s a node'
        }
    }

    throw 'cannot remove the leaf "' + leafName + '" from the node "' + this.__name + '" -> not found';
}
