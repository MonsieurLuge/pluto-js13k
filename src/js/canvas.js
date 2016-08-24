/**
 * Canvas object
 * @param {integer} width
 * @param {integer} height
 */
function Canvas(name, width, height) {
    this.__cachedCanvas    = undefined;
    this.__cached2dContext = undefined;
    this.__height          = height;
    this.__name            = name;
    this.__width           = width;
}

/**
 * Returns the canvas
 * @return {Object}
 */
Canvas.prototype.canvas = function() {
    if (this.__cachedCanvas) {
        return this.__cachedCanvas;
    }

    if (this.__exists(this.__name)) {
        this.__cachedCanvas = document.getElementById(this.__name);
    } else {
        this.__cachedCanvas    = document.createElement('canvas');
        this.__cachedCanvas.id = this.__name;
    }

    this.__cachedCanvas.height = this.__height;
    this.__cachedCanvas.width  = this.__width;

    return this.__cachedCanvas;
}

/**
 * Returns the 2D context
 * @return {CanvasRenderingContext2D}
 */
Canvas.prototype.context2d = function() {
    if (this.__cached2dContext) {
        return this.__cached2dContext;
    }

    this.__cached2dContext = this.canvas().getContext('2d');

    return this.__cached2dContext;
}

/**
 * Returns the canva's height
 * @return {integer}
 */
Canvas.prototype.height = function () {
    return this.__height;
};

/**
 * Returns the canva's width
 * @return {integer}
 */
Canvas.prototype.width = function () {
    return this.__width;
};

/**
 * Does this named canvas exists ?
 */
Canvas.prototype.__exists = function(name) {
    return (document.getElementById(name) != undefined);
}
