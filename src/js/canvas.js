/**
 * Canvas object
 * @param {integer} width
 * @param {integer} height
 */
function Canvas(name, width, height) {
    this.cachedCanvas    = undefined;
    this.cached2dContext = undefined;
    this.name            = name;
    this.height          = height;
    this.width           = width;
}

/**
 * Returns the canvas
 * @return {Object}
 */
Canvas.prototype.canvas = function() {
    if (this.cachedCanvas) {
        return this.cachedCanvas;
    }

    if (this.__exists(this.name)) {
        this.cachedCanvas = document.getElementById(this.name);
    } else {
        this.cachedCanvas    = document.createElement('canvas');
        this.cachedCanvas.id = this.name;
        document.body.appendChild(this.cachedCanvas); // TODO remove
    }

    this.cachedCanvas.height = this.height;
    this.cachedCanvas.width  = this.width;

    return this.cachedCanvas;
}

/**
 * Returns the 2D context
 * @type {CanvasRenderingContext2D}
 */
Canvas.prototype.context2d = function() {
    if (this.cached2dContext) {
        return this.cached2dContext;
    }

    this.cached2dContext = this.canvas().getContext('2d');

    return this.cached2dContext;
}

/**
 * Does this named canvas exists ?
 */
Canvas.prototype.__exists = function(name) {
    return (document.getElementById(name) != undefined);
}
