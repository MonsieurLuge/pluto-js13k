/**
 * Room object
 * @param {string} name
 * @param {string} roomType
 * @param {string} biomeType
 */
function Room(name, roomType, biomeType) {
    this.__biomeType      = biomeType;
    this.__name           = name;
    this.__livingEntities = new Entities();
    this.__roomType       = roomType;
    this.__staticEntities = new Entities();
    this.__terrain        = undefined;
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
 * Returns the living entities
 * @return {Entities}
 */
Room.prototype.livingEntities = function() {
    return this.__livingEntities;
}

/**
 * Returns the room's name
 * @return {string}
 */
Room.prototype.name = function() {
    return this.__name;
}

/**
 * Returns the room's terrain
 * @return {Terrain}
 */
Room.prototype.terrain = function() {
    if (this.__terrain) {
        return this.__terrain;
    }

    this.__createTerrain();

    return this.terrain();
}

/**
 * Returns the room's type
 * @return {string}
 */
Room.prototype.type = function() {
    return this.__roomType;
}

/**
 * Creates the room's terrain
 */
Room.prototype.__createTerrain = function() {
    var content = '1111111' +
                  '1     1' +
                  '1  1  1' +
                  '1 11 11' +
                  '1111111';

    this.__terrain = new Terrain(7, 5, content);
}
