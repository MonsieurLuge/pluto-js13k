/**
 * Room object
 * @param {string} name
 */
function Room(name) {
    this.__name = name;
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
 * Returns the room name
 * @return {string}
 */
Room.prototype.name = function() {
    return this.__name;
}
