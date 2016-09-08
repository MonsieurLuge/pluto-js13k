/**
 * RoomsDefinitions object
 * @param {RoomDefinition[]} roomsDefinitions
 */
function RoomsDefinitions(roomsDefinitions = []) {
    this.__roomsDefinitions = roomsDefinitions;
}

/**
 * Adds a room definition
 * @param {RoomDefinition} roomDefinition
 */
RoomsDefinitions.prototype.add = function(roomDefinition) {
    this.__roomsDefinitions.push(roomDefinition);
}

/**
 * Returns the room definitions
 * @return {RoomDefinition[]}
 */
RoomsDefinitions.prototype.list = function() {
    return this.__roomsDefinitions;
}

/**
 * Returns the total number of rooms definitions
 * @return {integer}
 */
RoomsDefinitions.prototype.number = function() {
    return this.__roomsDefinitions.length;
}

/**
 * Removes a room definition by its name
 * @param {string} name
 * @throws {string}
 */
RoomsDefinitions.prototype.removeByName = function(name) {
    for (var index = 0; index < this.__roomsDefinitions.length; index++) {
        if (this.__roomsDefinitions[index].name() === name) {
            this.__roomsDefinitions.splice(index, 1);

            return;
        }
    }

    throw 'cannot remove room definition "' + name + '" -> not found';
}

/**
 * Returns the named room definition
 * @param {string} name
 * @return {RoomDefinition}
 * @throws {string}
 */
RoomsDefinitions.prototype.roomDefinitionByName = function(name) {
    for (var index = 0; index < this.__roomsDefinitions.length; index++) {
        if (this.__roomsDefinitions.name() === name) {
            return this.__roomsDefinitions[index];
        }
    }

    throw 'cannot find room definition "' + name + '"';
}
