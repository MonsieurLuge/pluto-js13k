/**
 * MaxSizeRatio object (MaxSizeRatio is a Size object)
 * @param {integer} width
 * @param {integer} height
 * @param {integer} wrapperWidth
 * @param {integer} wrapperHeight
 */
function MaxSizeRatio(width, height, wrapperWidth, wrapperHeight) {
    // this.__height        = height;
    // this.__width         = width;
    // this.__wrapperHeight = wrapperHeight;
    // this.__wrapperWidth  = wrapperWidth;

    // unfortunately, there is no method overloading in JS :/
    this.__size          = new Size(
        new MaxWidthRatio(
            width,
            height,
            wrapperWidth,
            wrapperHeight
        ),
        new MaxHeightRatio(
            width,
            height,
            wrapperWidth,
            wrapperHeight
        )
    );
}

/**
 * Returns the height
 * @return {integer}
 */
MaxSizeRatio.prototype.height = function() {
    return this.__size.height();
}

/**
 * Returns the width
 * @return {integer}
 */
MaxSizeRatio.prototype.width = function() {
    return this.__size.width();
}
