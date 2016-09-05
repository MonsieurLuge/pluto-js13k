/**
 * RoomsTree object
 * @param {array} roomsDefinitions
 */
function RoomsTree(roomsDefinitions = []) {
    this.__roomsDefinitions = roomsDefinitions;
    this.__root             = undefined;
}

/**
 * Returns the room by its name
 * @param {string} name
 */
RoomsTree.prototype.roomByName = function(name) {
    if (this.__root === undefined) {
        this.__generateTree();
    }

    return this.__findRoomByName(name);
}

/**
 * Returns the named room
 * @param {string} name
 * @return {Room}
 */
RoomsTree.prototype.__findRoomByName = function(name) {
    throw 'method not implemented : RoomsTree::__findRoomByName';
}

/**
 * Generates the room according to its definition
 * @param {RoomDefinition} roomDefinition
 * @returns {Room}
 */
RoomsTree.prototype.__generateRoom = function(roomDefinition) {
    throw 'TODO __generateRoom';
}

/**
 * Generates the tree
 */
RoomsTree.prototype.__generateTree = function() {
    this.__root = this.__generateRoom(this.__roomDefinitionByType('entrance'));
}

/**
 * Returns the named room definition
 * @param {string} name
 * @return {RoomDefinition}
 * @throws {string}
 */
RoomsTree.prototype.__roomDefinitionByName = function(name) {
    for (var index = 0; index < this.__roomsDefinitions.length; index++) {
        if (this.__roomsDefinitions[index].name() === name) {
            return this.__roomsDefinitions[index];
        }
    }

    throw 'cannot find the "' + name + '"(name) room definition';
}


RoomsTree.prototype.__roomDefinitionByType = function(type) {
    for (var index = 0; index < this.__roomsDefinitions.length; index++) {
        if (this.__roomsDefinitions[index].type() === type) {
            return this.__roomsDefinitions[index];
        }
    }

    throw 'cannot find the "' + type + '"(type) room definition';
}

/**
 * Adds a node to the current node
 * @param {Node} node
 */
// RoomsTree.prototype.addToCurrent = function(node) {
//     this.__currentNode.add(node);
// }

/**
 * Adds a node to the current one, and jumps to it
 * @param {Node} node
 */
// RoomsTree.prototype.addToCurrentAndJump = function(node) {
//     this.addToCurrent(node);
//
//     this.__currentNode = node;
// }

/**
 * Returns the current node
 * @return {Node}
 */
// RoomsTree.prototype.currentNode = function() {
//     return this.__currentNode;
// }

/**
 * Jump to the named node
 * @param {string} name
 * @throws {string}
 */
// RoomsTree.prototype.jumpToNode = function(name) {
//     // TODO jump to a named node
//     throw 'TODO jump to a named node';
// }

/**
 * Jumps to the root node
 */
// RoomsTree.prototype.jumpToRoot = function() {
//     this.__currentNode = this.__root;
// }

// /**
//  * Adds a room to the tree
//  * @param {Room} room
//  * @param {float}  chanceToNewNode
//  */
// ChapterMap.prototype.__addRoomNode = function(room, chanceToNewNode, maxDepth) {
//     // max depth is reached
//     if (this.__tree.currentNode().depth() >= maxDepth) {
//         this.__tree.jumpToRoot();
//
//         this.__addRoomNode(room, chanceToNewNode + 0.1, maxDepth);
//     }
//
//     // create a new node
//     if (Math.random() < chanceToNewNode) {
//         this.__tree.addToCurrentAndJump(
//             new Node(
//                 room,
//                 this.__tree.currentNode()
//             )
//         );
//     } else {
//         var childrens = this.__tree.currentNode().childrens();
//
//         if (childrens.length === 0) {
//             // no children ? return to the root node
//             this.__tree.jumpToRoot();
//         } else {
//             // jump to a random children
//             var childrenIndex = Math.floor(Math.random() * childrens.length);
//
//             this.__tree.jumpToNode(childrens[childrenIndex].name());
//         }
//
//         this.__addRoomNode(room, chanceToNewNode + 0.1, maxDepth);
//     }
// }
//
// /**
//  * Generates the chapter's map
//  */
// ChapterMap.prototype.__generate = function() {
//     this.__generateTree();
//     this.__generateMap();
// }
//
// /**
//  * Generates the map
//  */
// ChapterMap.prototype.__generateMap = function() {
//     // TODO define the rooms size & assemble them
// }
//
// /**
//  * Generates the map's tree
//  */
// ChapterMap.prototype.__generateTree = function() {
//     // max depth of the tree and distance between entrance & exit
//     var maxDepth = Math.floor(this.__rooms.rooms().length / 2);
//
//     // which rooms, that are not the entrance & exit ones, are not in the tree
//     var roomsLeft = [];
//
//     for (var index = 0; index < this.__rooms.rooms().length ; index++) {
//         if (
//             this.__rooms.rooms()[index].type() !== 'exit'
//             && this.__rooms.rooms()[index].type() !== 'entrance'
//         ) {
//             roomsLeft.push(this.__rooms.rooms()[index].name());
//         }
//     }
//
//     // add randomly the other rooms in the tree, straight to the exit
//     while (this.__tree.currentNode().depth() < maxDepth - 1) {
//         var index        = Math.floor(Math.random() * roomsLeft.length);
//         var nextRoomName = roomsLeft[index];
//
//         this.__tree.addToCurrentAndJump(
//             new Node(
//                 this.__rooms.roomByName(roomsLeft[index]),
//                 this.__tree.currentNode()
//             )
//         );
//
//         roomsLeft.splice(index, 1);
//     }
//
//     // add the exit
//     var exitName = this.__rooms.roomByType('exit').name();
//
//     this.__tree.addToCurrent(exitName);
//
//     // add the others rooms
//     this.__tree.jumpToRoot();
//
//     while (roomsLeft.length > 0) {
//         var nextRoomIndex = Math.floor(Math.random() * roomsLeft.length);
//
//         this.__addRoomNode(
//             this.__rooms.roomByName(roomsLeft[nextRoomIndex]),
//             0.4,
//             maxDepth
//         );
//
//         roomsLeft.splice(nextRoomIndex, 1);
//     }
//
//     this.__tree.jumpToRoot();
//     console.log(this.__tree);
// }
