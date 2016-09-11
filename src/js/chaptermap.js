/**
 * ChapterMap object
 * @param {ChapterTree} chapterTree
 * @param {RoomsDefinitions} roomsDefinitions
 */
function ChapterMap(chapterTree, roomsDefinitions) {
    this.__chapterTree      = chapterTree;
    this.__currentRoomName  = undefined;
    this.__map              = [];
    this.__roomsDefinitions = roomsDefinitions;
}

/**
 * Returns the current room
 * @return {Room}
 */
ChapterMap.prototype.currentRoom = function() {
    if (this.__currentRoomName) {
        return this.__rooms.roomByName(this.__currentRoomName);
    }

    this.__currentRoomName = this.__chapterTree.rootNode().name();

    return this.__rooms.roomByName(this.__currentRoomName);
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
