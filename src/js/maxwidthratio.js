/**
 * MaxWidthRatio object
 * @param {integer} width
 * @param {integer} height
 * @param {integer} wrapperWidth
 * @param {integer} wrapperHeight
 */
function MaxWidthRatio(width, height, wrapperWidth, wrapperHeight) {
    this.__height        = height;
    this.__width         = width;
    this.__wrapperHeight = wrapperHeight;
    this.__wrapperWidth  = wrapperWidth;
}

/**
 * Returns the max width, conserving the ratio
 * @return {integer}
 */
MaxWidthRatio.prototype.valueOf = function() {
    return Math.floor(
        this.__width * Math.min(
            this.__wrapperWidth / this.__width,
            this.__wrapperHeight / this.__height
        )
    );
}
