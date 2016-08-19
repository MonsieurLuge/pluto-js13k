/**
 * Player object (Player is a LivingEntity)
 * @param {[type]}       mouse
 * @param {Entity} entity
 */
function Player(mouse, entity, xPos, yPos) {
    this.entity = entity;
    this.mouse  = mouse;
    this.xPos   = xPos;
    this.yPos   = yPos;
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
    return [];
}
