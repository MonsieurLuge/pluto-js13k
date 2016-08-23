/**
 * AI object (AI is a "living entity")
 * @param {Entity}      entity
 * @param {Coordinates} coordinates
 */
function AI(entity, coordinates) {
    this.__entity      = entity;
    this.__coordinates = coordinates; // TODO move this to the Game object
}

/**
 * Returns the entity coordinates
 * @return {Coordinates}
 */
AI.prototype.coordinates = function() {
    return this.__coordinates;
}

/**
 * Draws the AI's entity
 * @param {CanvasRenderingContext2D} context
 */
AI.prototype.draw = function(context) {
    this.__entity.draw(context, this.__coordinates);
}

/**
 * Request the entity about its next action
 * @param {array} environment
 */
AI.prototype.live = function(environment) {
    return this.__entity.nextAction(environment);
}

/**
 * Returns the entity type
 * @return {string}
 */
AI.prototype.type = function() {
    return 'ai';
}
