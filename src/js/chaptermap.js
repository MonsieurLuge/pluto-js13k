/**
 * ChapterMap object
 * @param {Rooms} rooms
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
 * Generates the map
 */
ChapterMap.prototype.__generate = function() {
    // TODO generate map
}
