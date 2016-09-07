/**
 * Node object
 * @param {string} name
 * @param {string} parent
 */
function Node(name, parent = undefined) {
    this.__childrens = [];
    this.__name      = name;
    this.__parent    = parent;
}

/**
 * Adds a children
 * @param {string} name
 */
Node.prototype.addChildren = function(name) {
    this.__childrens.push(name);
}

/**
 * Returns the node's childrens
 * @return {array}
 */
Node.prototype.childrens = function() {
    return this.__childrens;
}

/**
 * Returns the name
 * @return {string}
 */
Node.prototype.name = function() {
    return this.__name;
}

/**
 * Returns the parent
 * @return {string}
 * @throws {string}
 */
Node.prototype.parent = function() {
    if (this.__parent) {
        return this.__parent;
    }

    throw 'the node "' + this.__name + '" is the root -> cannot find it\'s parent';
}
