/**
 * ChapterMap object
 * @param {Rooms}   rooms
 * @param {MapTree} mapTree
 */
function ChapterMap(rooms) {
    this.__map   = [];
    this.__rooms = rooms;
    // should be in a secondary ctor, but not available in JS
    this.__tree  = new Tree(
        new Node(rooms.roomByType('entrance'))
    );
}

/**
 * Returns the entrance room
 * @return {Room}
 */
ChapterMap.prototype.entrance = function() {
    if (this.__map.length === 0) { // TODO find a way to remove this ugly test...
        this.__generate(); // TODO ... and to generate the map differently
    }

    return this.__rooms.roomByType('entrance');
}

/**
 * Returns the named room
 * @param  {string}
 * @return {Room}
 */
ChapterMap.prototype.room = function(roomName) {
    return this.__rooms.roomByName(roomName);
}

/**
 * Adds a room to the tree
 * @param {string} roomName
 * @param {float}  chanceToNewNode
 */
ChapterMap.prototype.__addRoomNode = function(roomName, chanceToNewNode, maxDepth) {
    // max depth is reached
    if (this.__tree.currentNode().depth() >= maxDepth) {
        this.__tree.jumpToRoot();

        this.__addRoomNode(roomName, chanceToNewNode + 0.1, maxDepth);
    }

    // create a new node
    if (Math.random() < chanceToNewNode) {
        this.__tree.addToCurrentAndJump(
            new Node(
                roomName,
                this.__tree.currentNode()
            )
        );
    } else {
        var childrens = this.__tree.currentNode().childrens();

        if (childrens.length === 0) {
            // no children ? return to the root node
            this.__tree.jumpToRoot();
        } else {
            // jump to a random children
            var childrenIndex = Math.floor(Math.random() * childrens.length);

            this.__tree.jumpToNode(childrens[childrenIndex].name());
        }

        this.__addRoomNode(roomName, chanceToNewNode + 0.1, maxDepth);
    }
}

/**
 * Generates the chapter's map
 */
ChapterMap.prototype.__generate = function() {
    this.__generateTree();
    this.__generateMap();
}

/**
 * Generates the map
 */
ChapterMap.prototype.__generateMap = function() {
    // TODO define the rooms size & assemble them
}

/**
 * Generates the map's tree
 */
ChapterMap.prototype.__generateTree = function() {
    // max depth of the tree and distance between entrance & exit
    var maxDepth = Math.floor(this.__rooms.rooms().length / 2);

    // which rooms, that are not the entrance & exit ones, are not in the tree
    var roomsLeft = [];

    for (var index = 0; index < this.__rooms.rooms().length ; index++) {
        if (
            this.__rooms.rooms()[index].type() !== 'exit'
            && this.__rooms.rooms()[index].type() !== 'entrance'
        ) {
            roomsLeft.push(this.__rooms.rooms()[index].name());
        }
    }

    // add randomly the other rooms in the tree, straight to the exit
    while (this.__tree.currentNode().depth() < maxDepth - 1) {
        var index        = Math.floor(Math.random() * roomsLeft.length);
        var nextRoomName = roomsLeft[index];

        this.__tree.addToCurrentAndJump(
            new Node(
                roomsLeft[index],
                this.__tree.currentNode()
            )
        );

        roomsLeft.splice(index, 1);
    }

    // add the exit
    var exitName = this.__rooms.roomByType('exit').name();

    this.__tree.addToCurrent(exitName);

    // add the others rooms
    this.__tree.jumpToRoot();

    while (roomsLeft.length > 0) {
        var nextRoomIndex = Math.floor(Math.random() * roomsLeft.length);

        this.__addRoomNode(roomsLeft[nextRoomIndex], 0.4, maxDepth);

        roomsLeft.splice(nextRoomIndex, 1);
    }

    this.__tree.jumpToRoot();
    console.log(this.__tree);
}
