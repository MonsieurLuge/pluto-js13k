/**
 * Terrain object
 * @param {Biome} biome
 * @param {array} shape
 * @param {Exits} exits
 */
function Terrain(biome, shape, exits) {
    this.__cachedContent = undefined;
    this.__biome         = biome;
    this.__exits         = exits;
    this.__shape         = shape;
}

/**
 * Returns the content
 * @return {array}
 */
Terrain.prototype.content = function() {
    if (this.__cachedContent) {
        return this.__content;
    }

    this.__generateContent();

    return this.content();
}

/**
 * Draws the terrain
 * @param  {CanvasRenderingContext2D} context
 * @param  {Coordinates}              coordinates
 */
Terrain.prototype.draw = function(context, coordinates) {
    // TODO draw the terrain
}

/**
 * Generates the terrain
 */
Terrain.prototype.__generateContent = function() {
    // TODO generate Terrain content
    this.__cachedContent = [];
}
