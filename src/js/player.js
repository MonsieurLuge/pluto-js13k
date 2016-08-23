/**
 * Player object (Player is a "living entity")
 * @param {[type]}      mouse
 * @param {Entity}      entity
 * @param {Coordinates} coordinates
 */
function Player(mouse, entity, coordinates) {
    this.__entity      = entity;
    this.__mouse       = mouse;
    this.__coordinates = coordinates; // TODO move this to the Game object
}

/**
 * Returns the entity coordinates
 * @return {Coordinates}
 */
Player.prototype.coordinates = function() {
    return this.__coordinates;
}

/**
 * Draws the player's entity
 * @param {CanvasRenderingContext2D} context
 */
Player.prototype.draw = function(context) {
    this.__entity.draw(
        context,
        this.__coordinates
    );
}

/**
 * The player never requests the entity about its next action
 * @return {undefined}
 */
Player.prototype.live = function() {
    return undefined;
}

/**
 * Returns the entity type
 * @return {string}
 */
Player.prototype.type = function() {
    return 'player';
}
