/**
 * MapTree object
 * @param {array} roomsDefinitions
 */
function MapTree(roomsDefinitions = []) {
    this.__currentNode      = undefined;
    this.__roomsDefinitions = roomsDefinitions;
    this.__root             = undefined;
}

/**
 * Adds a node to the current node
 * @param {Node} node
 */
MapTree.prototype.addToCurrent = function(node) {
    this.__currentNode.add(node);
}

/**
 * Adds a node to the current one, and jumps to it
 * @param {Node} node
 */
MapTree.prototype.addToCurrentAndJump = function(node) {
    this.addToCurrent(node);

    this.__currentNode = node;
}

/**
 * Returns the current node
 * @return {Node}
 */
MapTree.prototype.currentNode = function() {
    return this.__currentNode;
}

/**
 * Jump to the named node
 * @param  {string} name
 * @throws {string}
 */
MapTree.prototype.jumpToNode = function(name) {
    // TODO jump to a named node
    throw 'TODO jump to a named node';
}

/**
 * Jumps to the root node
 */
MapTree.prototype.jumpToRoot = function() {
    this.__currentNode = this.__root;
}
