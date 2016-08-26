/**
 * MaxSizeRatio object (MaxSizeRatio is a Size object)
 * @param {integer} width
 * @param {integer} height
 * @param {integer} wrapperWidth
 * @param {integer} wrapperHeight
 */
function MaxSizeRatio(width, height, wrapperWidth, wrapperHeight) {
    this.__height        = height;
    this.__size          = undefined; // no function overload :(
    this.__width         = width;
    this.__wrapperHeight = wrapperHeight;
    this.__wrapperWidth  = wrapperWidth;
}

/**
 * Returns the height
 * @return {integer}
 */
MaxSizeRatio.prototype.height = function() {
    return this.__size().height();
}

/**
 * Returns the width
 * @return {integer}
 */
MaxSizeRatio.prototype.width = function() {
    return this.__size().width();
}

/**
 * Returns the max size, conserving the ratio
 * @return {Size}
 */
MaxSizeRatio.prototype.__size = function() {
    if (this.__size) {
        return this.__size;
    }

    this.__size = new Size(
        new MaxHeightRatio(
            this.__width,
            this.__height,
            this.__wrapperHeight,
            this.__wrapperWidth
        ),
        new MaxWidthRatio(
            this.__width,
            this.__height,
            this.__wrapperHeight,
            this.__wrapperWidth
        )
    );

    return this.__size();
}
