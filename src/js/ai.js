/**
 * TODO [AI description]
 * @param {[type]} entity [description]
 * @param {[type]} xPos   [description]
 * @param {[type]} yPos   [description]
 */
function AI(entity, xPos, yPos) {
    this.entity = entity;
    this.xPos   = xPos;
    this.yPos   = yPos;
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
 * @return {[type]} [description]
 */
AI.prototype.live = function() {
    return [];
}

AI.prototype.move = function(xDelta, yDelta) {
    this.xPos += xDelta;
    this.yPos += yDelta;
}
