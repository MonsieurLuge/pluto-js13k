/**
 * ChapterOne object (ChapterOne is a ChapterDefinition)
 */
function ChapterOne(startingRoom) {
    this.__cachedRooms  = undefined;
    this.__name         = 'The Awakening';
    this.__number       = 1;
    this.__startingRoom = startingRoom;
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

/**
 * Returns the rooms
 * @return {array}
 */
ChapterOne.prototype.rooms = function() {
    if (this.__cachedRooms) {
        return this.__cachedRooms;
    }

    this.__cachedRooms = this.__initRooms();

    return this.rooms();
}

/**
 * Returns the name of the starting room
 * @return {string}
 */
ChapterOne.prototype.startingRoom = function() {
    return this.__startingRoom;
}

/**
 * Adds the rooms to the chapter
 * TODO move this to pluto.js
 * @return {array}
 */
ChapterOne.prototype.__initRooms = function() {
    return [
        new Room('elevator to the surface')
    ];
}
