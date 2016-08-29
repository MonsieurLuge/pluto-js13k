/**
 * ChapterMap object
 * @param {Rooms}   rooms
 * @param {MapTree} mapTree
 */
function ChapterMap(rooms, mapTree) {
    this.__map   = [];
    this.__rooms = rooms;
    this.__tree  = mapTree;
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
    var currentNode = this.__tree;

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
    while (currentNode.depth() < maxDepth - 1) {
        var index        = Math.floor(Math.random() * roomsLeft.length);
        var nextRoomName = roomsLeft[index];

        currentNode.add(roomsLeft[index]);
        roomsLeft.splice(index, 1);

        currentNode = currentNode.childrenByName(nextRoomName);
    }

    // add the exit
    var exitName = this.__rooms.roomByType('exit').name();
    currentNode.add(exitName);
    currentNode = currentNode.childrenByName(exitName);

    // TODO add the others rooms
}
