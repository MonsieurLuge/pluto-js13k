/**
 * Rooms object
 * @param {Room[]} rooms
 */
function Rooms(rooms) {
    this.__rooms = rooms;
}

/**
 * Returns the room by its name
 * @param  {string} roomName
 * @return {Room}
 * @throws {string}
 */
Rooms.prototype.roomByName = function(roomName) {
    // TODO better filter
    for (var index = 0; index < this.__rooms.length; index++) {
        if (this.__rooms[index].name() === roomName) {
            return this.__rooms[index];
        }
    }

    throw 'the room "' + roomName + '" doesn\'t exist'
}

/**
 * Returns the room by its type
 * @param  {string} roomType
 * @return {Room}
 * @throws {string}
 */
Rooms.prototype.roomByType = function(roomType) {
    // TODO better filter
    for (var index = 0; index < this.__rooms.length; index++) {
        if (this.__rooms[index].type() === roomType) {
            return this.__rooms[index];
        }
    }

    throw 'no "' + roomType + '" room found'
}
