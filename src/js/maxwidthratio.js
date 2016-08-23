/**
 * MaxWidthRatio object
 * @param {integer} width
 * @param {integer} height
 * @param {integer} wrapperWidth
 * @param {integer} wrapperHeight
 */
function MaxWidthRatio(width, height, wrapperWidth, wrapperHeight) {
    this.height        = height;
    this.width         = width;
    this.wrapperHeight = wrapperHeight;
    this.wrapperWidth  = wrapperWidth;
}

/**
 * Returns the max width, conserving the ratio
 * @return {integer}
 */
MaxWidthRatio.prototype.valueOf = function() {
    return Math.floor(
        this.width * Math.min(
            this.wrapperWidth / this.width,
            window.wrapperHeight / this.height
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
