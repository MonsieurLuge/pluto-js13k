/**
 * Scene object
 * @param {Canvas} canvas
 */
function Scene(canvas, background) {
    this.__background = background;
    this.__canvas     = canvas;
}

/**
 * Draws the scene + post-process
 * @param  {Canvas} buffer
 */
Scene.prototype.draw = function(buffer) {
    // draw the background
    this.__background.draw(buffer);

    // post-process
    // TODO post-process
}

/**
 * Draws the given buffer into the scene's canvas
 * @param {Canvas} buffer
 */
Scene.prototype.scaleBuffer = function(buffer) {
    // stretch the given buffer
    this.__canvas.context2d().drawImage(
        buffer.canvas(),
        0,
        0,
        this.__canvas.size().width(),
        this.__canvas.size().height()
    );
}
