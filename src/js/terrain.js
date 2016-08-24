/**
 * Terrain object
 * @param {integer} width
 * @param {string} content // TODO use bytes instead
 */
function Terrain(width, content) {
    this.__content = content;
    this.__width   = width;
}

/**
 * Returns the content
 * @return {array}
 */
Terrain.prototype.content = function() {
    // var arrayContent = [];
    //
    // for (var index = 0; index < this.__content.length; index++) {
    //     // TODO
    // }
    //
    // return arrayContent;
}

/**
 * Draws the terrain
 * @param  {CanvasRenderingContext2D} context
 * @param  {Coordinates}              coordinates
 */
Terrain.prototype.draw = function(context, coordinates) {
    // TODO draw the terrain
}
