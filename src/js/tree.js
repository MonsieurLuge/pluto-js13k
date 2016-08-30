/**
 * Tree object
 * @param {Node} root
 */
function Tree(root) {
    this.__currentNode = root;
    this.__root        = root;
}

/**
 * Adds a node to the current node
 * @param {Node} node
 */
Tree.prototype.addToCurrent = function(node) {
    this.__currentNode.add(node);
}

/**
 * Adds a node to the current one, and jumps to it
 * @param {Node} node
 */
Tree.prototype.addToCurrentAndJump = function(node) {
    this.addToCurrent(node);

    this.__currentNode = node;
}

/**
 * Returns the current node
 * @return {Node}
 */
Tree.prototype.currentNode = function() {
    return this.__currentNode;
}

/**
 * Jump to the named node
 * @param  {string} name
 * @throws {string}
 */
Tree.prototype.jumpToNode = function(name) {
    // TODO jump to a named node
    throw 'TODO jump to a named node';
}

/**
 * Jumps to the root node
 */
Tree.prototype.jumpToRoot = function() {
    this.__currentNode = this.__root;
}
