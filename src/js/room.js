/**
 * Room object
 * @param {string}  name
 * @param {string}  type
 * @param {Terrain} terrain
 */
function Room(name, type, terrain) {
    this.__name    = name;
    this.__terrain = terrain;
    this.__type    = type;
}

/**
 * Draws the room
 * @param  {CanvasRenderingContext2D} context
 * @param  {Coordinates}              coordinates
 */
Room.prototype.draw = function(context, coordinates) {
    // TODO draw the room
}

/**
 * Returns the room's name
 * @return {string}
 */
Room.prototype.name = function() {
    return this.__name;
}

/**
 * Returns the room's type
 * @return {string}
 */
Room.prototype.type = function() {
    return this.__type;
}
