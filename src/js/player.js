/**
 * Player object (Player is a LivingEntity)
 * @param {[type]} mouse
 * @param {Entity} entity
 */
function Player(mouse, entity, xPos, yPos) {
    this.entity = entity;
    this.mouse  = mouse;
    this.xPos   = xPos; // TODO move this to the Game object
    this.yPos   = yPos; // TODO move this to the Game object
}

/**
 * Returns the entity coordinates
 * @return {array}
 */
Player.prototype.coordinates = function() {
    return [this.xPos, this.yPos];
}

/**
 * TODO [draw description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
Player.prototype.draw = function(context) {
    this.entity.draw(context, this.xPos, this.yPos);
}

/**
 * TODO [live description]
 * @return {[type]} [description]
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
