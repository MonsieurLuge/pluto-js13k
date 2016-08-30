/**
 * Node object
 * @param {string} name
 * @param {Node}   parent
 */
function Node(name, parent = undefined) {
    this.__depth     = 0;
    this.__childrens = [];
    this.__name      = name;
    this.__parent    = parent;
}

/**
 * Adds a children
 * @param {Node} node
 */
Node.prototype.add = function(node) {
    this.__childrens.push(node);
}

/**
 * Returns the depth (root is 0)
 * @return {integer}
 */
Node.prototype.depth = function() {
    try {
        return this.parent().depth() + 1;
    } catch (message) {
        // no parent found ? so it's the root one
        return 0;
    }
}

/**
 * Returns the node's childrens
 * @return {array}
 */
Node.prototype.childrens = function() {
    return this.__childrens;
}

/**
 * Returns a children
 * @param {string} name
 * @return {Node}
 * @throws {string}
 */
Node.prototype.childrenByName = function(name) {
    for (var index = 0; index < this.__childrens.length; index++) {
        if (this.__childrens[index].name() === name) {
            return this.__childrens[index];
        }
    }

    throw 'cannot find the children named "' + name + '" for the node "' + this.__name + '"';
}

/**
 * Returns the name
 * @return {string}
 */
Node.prototype.name = function() {
    return this.__name;
}

/**
 * Returns the parent node
 * @return {Node}
 * @throws {string}
 */
Node.prototype.parent = function() {
    if (this.__parent) {
        return this.__parent;
    }

    throw 'the node "' + this.__name + '" is the root -> cannot find it\'s parent';
}

/**
 * Removes a children
 * @param {string} childName
 * @throws {string}
 */
Node.prototype.remove = function(childName) {
    for (var index = 0; index < this.__childrens.length; index++) {
        // TODO rewrite this test
        if (
            this.__childrens[index].name() === childName
            && this.__childrens[index].leaves() === 0
        ) {
            this.__childrens.splice(index, 1);
            return;
        }

        if (this.__childrens[index].name() === childName) {
            throw 'cannot remove the child "' + childName + '" from the node "' + this.__name + '" -> it\'s a node'
        }
    }

    throw 'cannot remove the child "' + childName + '" from the node "' + this.__name + '" -> not found';
}
