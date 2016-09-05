/**
 * ChapterMap object
 * @param {RoomsTree} tree
 */
function ChapterMap(entrance, tree) {
    this.__currentRoom = entrance;
    this.__tree        = tree;
}

/**
 * Returns the current Room
 * @return {Room}
 */
ChapterMap.prototype.currentRoom = function() {
    return this.__tree.roomByName(this.__currentRoom);
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
