/**
 * MaxHeightRatio object
 * @param {integer} width
 * @param {integer} height
 * @param {integer} wrapperWidth
 * @param {integer} wrapperHeight
 */
function MaxHeightRatio(width, height, wrapperWidth, wrapperHeight) {
    this.height        = height;
    this.width         = width;
    this.wrapperHeight = wrapperHeight;
    this.wrapperWidth  = wrapperWidth;
}

/**
 * Returns the max height, conserving the ratio
 * @return {integer}
 */
MaxHeightRatio.prototype.valueOf = function() {
    return Math.floor(
        this.height * Math.min(
            this.wrapperWidth / this.width,
            this.wrapperHeight / this.height
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