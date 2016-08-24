/**
 * Chapter object
 * @param {Chapter} Chapter definition
 */
function Chapter(chapterDefinition) {
    this.__chapterDefinition = chapterDefinition;
}

/**
 * Returns the chapter's name
 * @return {string}
 */
Chapter.prototype.name = function() {
    return this.__chapterDefinition.name();
}

/**
 * Returns the chapter's number
 * @return {integer}
 */
Chapter.prototype.number = function() {
    return this.__chapterDefinition.number();
}

/**
 * Returns the chapter's terrain
 * @return {Terrain}
 */
Chapter.prototype.terrain = function() {
    return new Terrain(10, '1111111111100000006110023040611111111111');
}
