/**
 * Chapters object
 * @param {Chapter[]} chapters
 */
function Chapters(chapters) {
    this.cachedCurrentChapter = undefined;
    this.chapters             = chapters;
    this.currentChapter       = 1;
}

/**
 * Returns the current chapter
 * @return {Chapter}
 * @throws {string}
 */
Chapters.prototype.current = function() {
    if (this.cachedCurrentChapter) {
        return this.cachedCurrentChapter;
    }

    for (var index = 0; index < this.chapters.length; index++) {
        if (this.chapters[index].number == this.currentChapter) {
            this.cachedCurrentChapter = this.chapters[index];

            return this.cachedCurrentChapter;
        }
    }

    throw 'the chapter #' + this.currentChapter + ' doesn\'t exist !';
}

/**
 * Returns the next chapter
 * @return {Chapter}
 */
Chapters.prototype.next = function() {
    this.cachedCurrentChapter = undefined;

    this.currentChapter++;

    return this.current();
}
