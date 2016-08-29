/**
 * Entities object
 * @param {array} entities
 */
function Entities(entities) {
    this.__entities = entities;
}

/**
 * Adds an entity
 * @param {Entity} entity
 */
Entities.prototype.addEntity = function(entity) {
    this.__entities.push(entity);
}

/**
 * Removes an entity by its name
 * @param  {string} name
 * @throws {string}
 */
Entities.prototype.removeEntity = function(name) {
    for (var index = 0; index < this.__entities.length; index++) {
        if (this.__entities[index].name() === name) {
            this.__entities.splice(index, 1);
            return;
        }
    }

    throw 'cannot remove the named entity "' + name + '" -> not found';
}
