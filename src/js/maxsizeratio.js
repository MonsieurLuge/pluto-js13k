/**
 * MaxSizeRatio object (MaxSizeRatio is a Size object)
 * @param {integer} width
 * @param {integer} height
 * @param {integer} wrapperWidth
 * @param {integer} wrapperHeight
 */
function MaxSizeRatio(width, height, wrapperWidth, wrapperHeight) {
    // should be in a secondary ctor, but not available in JS
    this.__size = new Size(
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
