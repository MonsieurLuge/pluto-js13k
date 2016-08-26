/**
 * Terrain object
 * @param {integer} width
 * @param {string}  content // TODO use bytes instead
 */
function Terrain(width, height, content) {
    this.__content = content;
    this.__height  = height;
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

/**
 * Returns the height
 * @return {integer}
 */
Terrain.prototype.height = function() {
    return this.__height;
}

/**
 * Returns the width
 * @return {string}
 */
Terrain.prototype.width = function() {
    return this.__width;
}
