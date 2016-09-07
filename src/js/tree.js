/**
 * Tree object
 * @param {string} entrance
 * @param {string} exit
 * @param {RoomsDefinitions} roomsDefinitions
 */
function Tree(entrance, exit, roomsDefinitions) {
    this.__entrance         = entrance;
    this.__exit             = exit;
    this.__roomsDefinitions = roomsDefinitions;
    this.__tree             = [];
}

/**
 * Returns the named node
 * @param {string} name
 * @return {Node}
 * @throws {string}
 */
Tree.prototype.nodeByName = function(name) {
    if (this.__tree.length === 0) {
        this.__generateTree();
    }

    for (var index = 0; index < this.__tree.length; index++) {
        if (this.__tree[index].name() === name) {
            return this.__tree[index];
        }
    }

    throw 'the node "' + name + '" doesn\'t exist';
}

/**
 * Returns the root node
 * @return {Node}
 */
Tree.prototype.rootNode = function() {
    return this.nodeByName(this.__entrance);
}

/**
 * Generates the tree
 */
Tree.prototype.__generateTree = function() {
    var maxDepth  = Math.floor(this.__roomsDefinitions.length / 2);
    var roomsLeft = this.__roomsDefinitions;

    // entrance room
    this.__tree.push(
        new Node(
            this.__entrance
        )
    );

    roomsLeft.removeByName(this.__entrance);

    // direct path to the exit

    // add the others rooms

}
