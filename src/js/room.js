/**
 * Room object
 * @param {string} name
 * @param {string} roomType
 * @param {Biome}  biome
 */
function Room(name, roomType, biome) {
    this.__name           = name;
    this.__roomType       = roomType;
    // woul'd be better in a secondary ctor, but not available in JS :/
    this.__livingEntities = new Entities();
    this.__terrain        = new Terrain(biome);
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
    return this.__terrain;
}

/**
 * Returns the room's type
 * @return {string}
 */
Room.prototype.type = function() {
    return this.__roomType;
}
