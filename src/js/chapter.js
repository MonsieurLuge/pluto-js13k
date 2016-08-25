/**
 * Chapter object
 * @param {Chapter} Chapter definition
 */
function Chapter(chapterDefinition) {
    this.__cachedRoom        = undefined;
    this.__chapterDefinition = chapterDefinition;
    this.__currentRoom       = undefined;
}

/**
 * Returns the current room
 * @return {Room}
 * @throws {string}
 */
Chapter.prototype.currentRoom = function() {
    if (this.__cachedRoom) {
        return this.__cachedRoom;
    }

    this.__currentRoom = this.__chapterDefinition.chapterMap().entrance();

    for (var index = 0; index < this.__chapterDefinition.rooms().length; index++) {
        if (this.__chapterDefinition.rooms()[index].name() === this.__currentRoom) {
            this.__cachedRoom = this.__chapterDefinition.rooms()[index];

            return this.currentRoom();
        }
    }

    throw 'the room "' + this.__currentRoom + '" does\'nt exist';
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

/**
 * Returns the chapter's terrain
 * @return {Terrain}
 */
Chapter.prototype.terrain = function() {
    return new Terrain(10, '1111111111100000006110023040611111111111');
}
