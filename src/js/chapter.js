/**
 * Chapter object
 * @param {Chapter} Chapter definition
 */
function Chapter(chapterDefinition) {
    this.__chapterDefinition = chapterDefinition;
    this.__currentRoomName   = undefined;
}

/**
 * Returns the current room
 * @return {Room}
 * @throws {string}
 */
Chapter.prototype.currentRoom = function() {
    if (this.__currentRoomName) {
        return this.__chapterDefinition.chapterMap().room(this.__currentRoomName);
    }

    this.__currentRoomName = this.__chapterDefinition.chapterMap().entrance().name();

    return this.currentRoom();
}

/**
 * Returns the chapter's name
 * @return {string}
 */
Chapter.prototype.name = function() {
    return this.__chapterDefinition.name();
}

/**
 * Returns the chapter's number
 * @return {integer}
 */
Chapter.prototype.number = function() {
    return this.__chapterDefinition.number();
}
