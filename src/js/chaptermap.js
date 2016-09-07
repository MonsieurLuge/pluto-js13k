/**
 * ChapterMap object
 * @param {Tree} tree
 */
function ChapterMap(tree) {
    this.__currentRoom = undefined;
    this.__map         = [];
    this.__tree        = tree;
    // woul'd be better in a secondary ctor, but not available in JS :/
    this.__rooms       = new Rooms();
}

/**
 * Returns the current room
 * @return {Room}
 */
ChapterMap.prototype.currentRoom = function() {
    if (this.__currentRoom) {
        return this.__rooms.roomByName(this.__currentRoom);
    }

    this.__currentRoom = this.__tree.rootNode().name();

    return this.__rooms.roomByName(this.__currentRoom);
}

/**
 * Draws the map
 * @param {CanvasRenderingContext2D} context
 */
ChapterMap.prototype.draw = function() {
    throw 'method not implemented : ChapterMap::draw';
}

/**
 * Go to the next room by its name
 * @param {string} roomName
 * @throws {string}
 */
ChapterMap.prototype.nextRoom = function(roomName) {
    throw 'method not implemented : ChapterMap::nextRoom';
}
