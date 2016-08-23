/**
 * MaxHeightRatio object
 * @param {integer} width
 * @param {integer} height
 * @param {integer} wrapperWidth
 * @param {integer} wrapperHeight
 */
function MaxHeightRatio(width, height, wrapperWidth, wrapperHeight) {
    this.__height        = height;
    this.__width         = width;
    this.__wrapperHeight = wrapperHeight;
    this.__wrapperWidth  = wrapperWidth;
}

/**
 * Returns the max height, conserving the ratio
 * @return {integer}
 */
MaxHeightRatio.prototype.valueOf = function() {
    return Math.floor(
        this.__height * Math.min(
            this.__wrapperWidth / this.__width,
            this.__wrapperHeight / this.__height
        )
    );
}


/**
 * Scale the scene to fit the screen on each window update
 */
// Game.prototype.__scaleScene = function() {
//     minScaleValue = Math.min(
//         window.innerWidth / this.sceneWidth,
//         window.innerHeight / this.sceneHeight
//     );
//
//     this.canvas.width  = this.sceneWidth * minScaleValue;
//     this.canvas.height = this.sceneHeight * minScaleValue;
//
//     this.context.scale(minScaleValue, minScaleValue);
// }
