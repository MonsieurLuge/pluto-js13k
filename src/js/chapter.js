/**
 * Chapter object
 * @param {Chapter} Chapter definition
 */
function Chapter(chapterDefinition) {
    this.__cachedTerrain     = undefined;
    this.__chapterDefinition = chapterDefinition;
}

/**
 * Draws the terrain
 * @param {CanvasRenderingContext2D} context
 * @param {Coordinates}              playerCoordinates
 */
Chapter.prototype.draw = function(context, playerCoordinates) {
    // for (var index = 0; index < this.__terrain().length; index++) {
    //     console.log(this.__terrain().sprite(index));
    // }
}

/**
 * Returns the chapter's name
 * @return {string}
 */
Chapter.prototype.name = function() {
    return this.__chapterDefinition.name();
};

/**
 * Returns the chapter's number
 * @return {integer}
 */
Chapter.prototype.number = function() {
    return this.__chapterDefinition.number();
}

/**
 * Returns the terrain
 * @return {Terrain}
 */
Chapter.prototype.__terrain = function() {
    if (this.__cachedTerrain) {
        return this.__cachedTerrain;
    }

    this.__cachedTerrain = new Terrain(10, '1111111111100000006110023040611111111111');

    return this.__cachedTerrain;
};
