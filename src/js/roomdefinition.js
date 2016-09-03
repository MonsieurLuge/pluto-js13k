/**
 * RoomDefinition object
 * @param {Biome} biome
 * @param {Entity[]} mandatoryEntities
 */
function RoomDefinition(biome, mandatoryEntities) {
    this->__biome             = biome;
    this->__mandatoryEntities = mandatoryEntities;
}
