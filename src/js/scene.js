/**
 * Scene object
 * @param {Canvas} canvas
 */
function Scene(canvas) {
    this.canvas = canvas;
}

/**
 * Draws the given buffer into the scene's canvas
 * @param {Canvas} buffer
 */
Scene.prototype.scaleBuffer = function(buffer) {
    this.canvas.context2d().drawImage(buffer.canvas(), 0, 0);
}
