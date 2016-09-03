/**
 * RoomDefinition object
 * @param {string} name
 * @param {string} type
 * @param {Biome} biome
 * @param {Entities} mandatoryEntities
 */
function RoomDefinition(name, type, biome, mandatoryEntities) {
    this->__biome             = biome;
    this->__mandatoryEntities = mandatoryEntities;
    this->__name              = name;
    this->__type              = type;
}

/**
 * Returns the Biome
 * @return {Biome}
 */
RoomDefinition.prototype.biome = function() {
    return this->__biome;
}

/**
 * Returns the mandatory entities
 * @return {Entities}
 */
RoomDefinition.prototype.mandatoryEntities = function() {
    return this->__mandatoryEntities;
}

/**
 * Returns the name
 * @return {string}
 */
RoomDefinition.prototype.name = function() {
    return this->__name;
}

/**
 * Returns the type
 * @return {string}
 */
RoomDefinition.prototype.type = function() {
    return this->__type;
}
