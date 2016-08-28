/**
 * ChapterOne object (ChapterOne is a Chapter)
 * @param {ChapterMap} chapterMap
 */
function ChapterOne(chapterMap) {
    this.__chapterMap      = chapterMap;
    this.__currentRoomName = undefined;
    this.__name            = 'The Awakening';
    this.__number          = 1;
}

/**
 * Returns the chapterMap
 * @return {ChapterMap}
 */
ChapterOne.prototype.chapterMap = function() {
    return this.__chapterMap;
}

/**
 * Returns the current room
 * @return {Room}
 * @throws {string}
 */
ChapterOne.prototype.currentRoom = function() {
    if (this.__currentRoomName) {
        return this.__chapterMap.room(this.__currentRoomName);
    }

    this.__currentRoomName = this.__chapterMap.entrance().name();

    return this.currentRoom();
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
