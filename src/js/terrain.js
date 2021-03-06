/**
 * Terrain object
 * @param {Biome} biome
 */
function Terrain(biome) {
    this.__cachedContent  = undefined;
    this.__biome          = biome;
    this.__exits          = [];
    this.__shape          = [];
    // woul'd be better in a secondary ctor, but not available in JS :/
    this.__staticEntities = new Entities();
}

/**
 * Returns the content
 * @return {array}
 * @throws {string}
 */
Terrain.prototype.content = function() {
    if (this.__cachedContent) {
        return this.__cachedContent;
    }

    throw 'the terrain is not built, don\'t forget to use the "generate" method';
}

/**
 * Draws the terrain
 * @param {CanvasRenderingContext2D} context
 * @param {Coordinates}              coordinates
 */
Terrain.prototype.draw = function(context, coordinates) {
    // TODO draw the terrain
}

/**
 * Generates the terrain
 * @param {array} shape
 * @param {array} exits // TODO Exits object ?
 */
Terrain.prototype.generate = function(shape, exits) {
    // TODO generate Terrain content
    this.__cachedContent = [];
}
