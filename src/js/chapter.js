/**
 * Chapter object
 * @param {string}  name
 * @param {integer} number
 */
function Chapter(name, number) {
    this.__cachedTerrain = undefined;
    this.__name          = name;
    this.__number        = number;
}

/**
 * Draws the terrain
 * @param {CanvasRenderingContext2D} context
 * @param {Coordinates}              playerCoordinates
 */
Chapter.prototype.draw = function(context, playerCoordinates) {
    // TODO
}

/**
 * Returns the chapter name
 * @return {string}
 */
Chapter.prototype.name = function() {
    return this.__name;
};

/**
 * Returns the chapter number
 * @return {integer}
 */
Chapter.prototype.number = function() {
    return this.__number;
}

/**
 * Returns the terrain
 * @return {Terrain}
 */
Chapter.prototype.__terrain = function() {
    if (this.__cachedTerrain) {
        return this.__cachedTerrain;
    }

    this.__cachedTerrain = [];

    return this.__cachedTerrain;
};
