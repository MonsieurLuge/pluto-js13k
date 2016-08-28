/**
 * Chapters object
 * @param {Chapter[]} chapters
 */
function Chapters(chapters) {
    this.__cachedCurrentChapter = undefined;
    this.__chapters             = chapters;
    this.__currentChapter       = 1;
}

/**
 * Returns the current chapter
 * @return {Chapter}
 * @throws {string}
 */
Chapters.prototype.current = function() {
    if (this.__cachedCurrentChapter) {
        return this.__cachedCurrentChapter;
    }

    for (var index = 0; index < this.__chapters.length; index++) {
        if (this.__chapters[index].number() === this.__currentChapter) {
            this.__cachedCurrentChapter = this.__chapters[index];

            return this.__cachedCurrentChapter;
        }
    }

    throw 'the chapter #' + this.__currentChapter + ' doesn\'t exist !';
}

/**
 * Returns the next chapter
 * @return {Chapter}
 */
Chapters.prototype.next = function() {
    this.__cachedCurrentChapter = undefined;

    this.__currentChapter++;

    return this.current();
}
