/**
 * RootNode object (RootNode is a Node)
 * @param {string} name
 */
function RootNode(name) {
    this.__childrens = [];
    this.__name      = name;
}

/**
 * Adds a children
 * @param {string} name
 */
RootNode.prototype.addChildren = function(name) {
    this.__childrens.push(name);
}

/**
 * Returns the node's childrens
 * @return {array}
 */
RootNode.prototype.childrens = function() {
    return this.__childrens;
}

/**
 * Returns the depth
 * @return {integer}
 */
RootNode.prototype.depth = function() {
    return 0;
}

/**
 * Returns the name
 * @return {string}
 */
RootNode.prototype.name = function() {
    return this.__name;
}

/**
 * There is no parent for the root node, so throw an exception
 * @throws {string}
 */
RootNode.prototype.parent = function() {
    throw 'no parent for the node "' + this.__name + '" -> it\'s the root one';
}
