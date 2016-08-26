/**
 * Size object
 * @param {integer} width
 * @param {integer} height
 */
function Size(width, height) {
    this.__height = height;
    this.__width  = width;
}

/**
 * Returns the height
 * @return {integer}
 */
Size.prototype.height = function() {
    return this.__height;
}

/**
 * Returns the width
 * @return {integer}
 */
Size.prototype.width = function() {
    return this.__width;
}
