/**
 * AI object (AI is a "living entity")
 * @param {Entity}      entity
 * @param {Coordinates} coordinates
 */
function AI(entity, coordinates) {
    this.entity      = entity;
    this.coordinates = coordinates; // TODO move this to the Game object
}

/**
 * Returns the entity coordinates
 * @return {array}
 */
// AI.prototype.coordinates = function() {
//     return this.coordinates;
// }

/**
 * TODO [draw description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
AI.prototype.draw = function(context) {
    this.entity.draw(context, this.coordinates);
}

/**
 * TODO [live description]
 * @param {array} environment
 * @return {[type]} [description]
 */
AI.prototype.live = function(environment) {
    return this.entity.nextAction(environment);
}

/**
 * Returns the entity type
 * @return {string}
 */
AI.prototype.type = function() {
    return 'ai';
}
