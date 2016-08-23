/**
 * Chapters object
 * @param {Chapter[]} chapters
 */
function Chapters(chapters) {
    this.chapters       = chapters;
    this.currentChapter = 1;
}

/**
 * Returns the current chapter
 * @return {Chapter}
 * @throws {string}
 */
Chapters.prototype.current = function() {
    for (var index = 0; index < this.chapters.length; index++) {
        if (this.chapters[index].number == this.currentChapter) {
            return this.chapters[index];
        }
    }

    throw 'the chapter #' + this.currentChapter + ' doesn\'t exist !';
}

/**
 * Returns the next chapter
 * @return {Chapter}
 */
Chapters.prototype.next = function() {
    this.currentChapter++;

    return this.current();
}
