/**
 * ChapterMap object
 * @param {Rooms} rooms
 */
function ChapterMap(rooms) {
    this.__map   = [];
    this.__rooms = rooms;
}

/**
 * Returns the entrance room
 * @return {Room}
 */
ChapterMap.prototype.entrance = function() {
    return this.__rooms.roomByType('entrance');
}

/**
 * Creates the map
 */
ChapterMap.prototype.__createMap = function() {
    // TODO create map
}
