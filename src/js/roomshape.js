/**
 * RoomShape object
 * @param {integer} width
 * @param {integer} height
 * @param {array} shape
 */
function RoomShape(width = 0, height = 0, shape = []) {
    this.__height = height;
    this.__shape  = shape;
    this.__widht  = width;
}

/**
 * Returns the height
 * @return {integer}
 */
RoomShape.prototype.height = function() {
    return this.__height;
}

/**
 * Returns the shape
 * @return {array}
 */
RoomShape.prototype.shape = function() {
    return this.__shape;
}

/**
 * Returns the width
 * @return {integer}
 */
RoomShape.prototype.width = function() {
    return this.__width;
}
