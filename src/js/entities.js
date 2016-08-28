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
 * Remove an entity
 * @param  {string} name
 * @throws {string}
 */
Entities.prototype.removeEntity = function(name) {
    for (var index = 0; index < this.__entities.length; index++) {
        if (this.__entities[index].name() === name) {
            this.__entities.slice(index, 1);
            return;
        }
    }

    throw 'cannot remove the named entity "' + name + '" -> not found';
}
