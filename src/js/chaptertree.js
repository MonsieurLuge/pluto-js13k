/**
 * ChapterTree object
 * @param {string} entrance
 * @param {string} exit
 * @param {roomsDefinitions} roomsDefinitions
 * @param {Tree} tree
 * @param {Rooms} rooms
 */
function ChapterTree(entrance, exit, roomsDefinitions, tree, rooms) {
    this.__entrance = entrance;
    this.__exit     = exit;
    this.__rooms    = rooms;
    this.__tree     = tree;
}

ChapterTree.prototype.entranceRoom = function() {
    return this.__rooms.roomByName(entrance);
}

ChapterTree.prototype.roomByName = function(name) {
    return this.__rooms.roomByName(name);
}
