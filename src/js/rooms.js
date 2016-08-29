/**
 * Rooms object
 * @param {Room[]} rooms
 */
function Rooms(rooms) {
    this.__rooms = rooms;
}

/**
 * Adds a room (its name must be unique)
 * @param {Room} room
 * @throws {string}
 */
Rooms.prototype.add = function(room) {
    try {
        this.roomByName(room.name());
    } catch (message) {
        throw 'cannot add the room "' + room.name() + '" -> already stored';
    }

    this.__rooms.push(room);
}

/**
 * Removes a room by its name
 * @param  {string} name
 * @throws {string}
 */
Rooms.prototype.remove = function(name) {
    for (var index = 0; index < this.__rooms.length; index++) {
        if (this.__rooms[index].name() === name) {
            this.__rooms.slice(index, 1);
            return;
        }
    }

    throw 'cannot remove the room "' + name + '" -> not found';
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
