/**
 * ChapterOne object (ChapterOne is a Chapter)
 * @param {Rooms} rooms
 * @param {ChapterMap} chapterMap
 */
function ChapterOne(rooms, chapterMap) {
    this.__chapterMap  = chapterMap;
    this.__name        = 'The Awakening';
    this.__number      = 1;
    this.__rooms       = rooms;
}

/**
 * Returns the current room
 * @return {Room}
 */
ChapterOne.prototype.currentRoom = function() {
    var currentRoomName = this.__chapterMap.__currentRoom();

    try {
        return this.__rooms.roomByName(currentRoomName);
    } catch (exceptionMessage) {
        this.__rooms.add(
            this.__chapterMap.roomDescription(currentRoomName)
        );

        return this.__rooms.roomByName(currentRoomName);
    }
}

/**
 * Returns the chapter's name
 * @return {string}
 */
ChapterOne.prototype.name = function() {
    return this.__name;
}

/**
 * Returns the chapter's number
 * @return {integer}
 */
ChapterOne.prototype.number = function() {
    return this.__number;
}
