/**
 * TODO [AI description]
 * @param {[type]} entity [description]
 * @param {[type]} xPos   [description]
 * @param {[type]} yPos   [description]
 */
function AI(entity, xPos, yPos) {
    this.entity = entity;
    this.xPos   = xPos; // TODO move this to the Game object
    this.yPos   = yPos; // TODO move this to the Game object
}

/**
 * Returns the entity coordinates
 * @return {array}
 */
AI.prototype.coordinates = function() {
    return [this.xPos, this.yPos];
}

/**
 * TODO [draw description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
AI.prototype.draw = function(context) {
    this.entity.draw(context, this.xPos, this.yPos);
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
