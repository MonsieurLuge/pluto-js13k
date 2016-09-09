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
    this.__roomsLeft        = roomsDefinitions;
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
 * Adds a room to the tree
 * @param {string} roomName
 */
Tree.prototype.__addNode = function(roomName, parent) {
    this.__tree.push(
        new Node(
            roomName
        )
    );

    this.__roomsLeft.removeByName(roomName);
}

/**
 * Adds the root node to the tree
 * @param {string} roomName
 * @throws {string} if the tree is not empty
 */
Tree.prototype.__addRootNode = function(roomName, parent) {
    if (this.__tree.length > 0) {
        throw 'cannot add the root node -> tree is not empty';
    }

    this.__tree.push(
        new RootNode(
            roomName
        )
    );

    this.__roomsLeft.removeByName(roomName);
}

/**
 * Generates the tree
 */
Tree.prototype.__generateTree = function() {
    // tree max depth
    var maxDepth = Math.floor(this.__roomsDefinitions.number() / 2);

    // add the entrance room
    this.__addRootNode(this.__entrance);

    // direct path to the exit
    var depth            = 1;
    var previousRoomName = this.__entrance;

    while (depth < maxDepth) {
        var index    = Math.floor(Math.random() * this.__roomsLeft.number())
        var roomName = this.__roomsLeft.list()[index].name();

        if (roomName === this.__exit) {
            continue;
        }

        this.__addNode(
            this.__roomsLeft.list()[index].name(),
            previousRoomName
        );

        // go for the next node
        previousRoomName = roomName;
        depth++;
    }

    // add the exit
    this.__addNode(
        this.__exit,
        previousRoomName
    );

    // add the others rooms
    while (this.__roomsLeft.number() > 0) {

    }
}
