/**
 * Scene object
 * @param {Canvas} finalCanvas
 * @param {Canvas} buffer
 * @param {Canvas} background
 */
function Scene(finalCanvas, buffer, background) {
    this.__background  = background;
    this.__buffer      = buffer;
    this.__finalCanvas = finalCanvas;
}

/**
 * Returns the buffer
 */
Scene.prototype.buffer = function() {
    return this.__buffer;
}

/**
 * Draws the scene + post-process + scale
 */
Scene.prototype.draw = function() {
    // draw the background
    this.__background.draw(this.__buffer);

    // post-process
    // TODO post-process

    // scale
    this.__scaleBuffer();
}

/**
 * Scale the buffer to fit the final canvas
 */
Scene.prototype.__scaleBuffer = function() {
    // stretch the given buffer
    this.__finalCanvas.context2d().drawImage(
        this.__buffer.canvas(),
        0,
        0,
        this.__finalCanvas.size().width(),
        this.__finalCanvas.size().height()
    );
}
