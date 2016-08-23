/**
 * Scene object
 * @param {Canvas} canvas
 */
function Scene(canvas) {
    this.__canvas = canvas;
}

/**
 * Draws the given buffer into the scene's canvas
 * @param {Canvas} buffer
 */
Scene.prototype.scaleBuffer = function(buffer) {
    this.__canvas.context2d().drawImage(
        buffer.canvas(),
        0,
        0,
        this.__canvas.width(),
        this.__canvas.height()
    );
}
