/**
 * Background object
 * @param {Canvas} canvas
 */
function Background(canvas) {
    this.__cache            = false;
    this.__canvas           = canvas;
    this.__plainColor       = '#dbdbcf';
    this.__transparentColor = 'rgba(0, 0, 0, 0.02)';
}

/**
 * Clears the background
 */
Background.prototype.clear = function() {
    this.__cache = false;
}

/**
 * Draws the background
 * @param {Canvas} canvas
 */
Background.prototype.draw = function(canvas) {
    if (this.__cache == true) {
        canvas.context2d().drawImage(
            this.__canvas.canvas(),
            0,
            0,
            canvas.width(),
            canvas.height()
        );

        return;
    }

    // simple color
    this.__canvas.context2d().fillStyle = this.__plainColor;
    this.__canvas.context2d().beginPath();
    this.__canvas.context2d().rect(0, 0, this.__canvas.size().width(), this.__canvas.size().height());
    this.__canvas.context2d().fill();

    // random squares
    this.__canvas.context2d().fillStyle = this.__transparentColor;

    for (var index = 0; index < 100; index++) {
        this.__canvas.context2d().beginPath();
        this.__canvas.context2d().rect(
            Math.floor(Math.random() * this.__canvas.size().width()) - 20,
            Math.floor(Math.random() * this.__canvas.size().height()) - 20,
            Math.floor(Math.random() * this.__canvas.size().width() / 2),
            Math.floor(Math.random() * this.__canvas.size().height() / 2)
        );
        this.__canvas.context2d().fill();
    }

    // cache the canvas
    this.__cache = true;

    this.draw(canvas);
}
