/**
 * ChapterOne object (ChapterOne is a Chapter)
 */
function ChapterOne() {
    this.__name   = 'The Awakening';
    this.__number = 1;
}

/**
 * Returns the chapter's name
 * @return {string}
 */
ChapterOne.prototype.name = function() {
    return this.__name;
};

/**
 * Returns the chapter's number
 * @return {integer}
 */
ChapterOne.prototype.number = function() {
    return this.__number;
};

/**
 * Returns the rooms
 * @return {array}
 */
ChapterOne.prototype.rooms = function() {
    return []; // TODO rooms
};
