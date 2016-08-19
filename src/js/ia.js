/**
 * TODO [IA description]
 * @param {[type]} entity [description]
 * @param {[type]} xPos   [description]
 * @param {[type]} yPos   [description]
 */
function IA(entity, xPos, yPos) {
    this.entity = entity;
    this.xPos   = xPos;
    this.yPos   = yPos;
}

/**
 * TODO [draw description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
IA.prototype.draw = function(context) {
    this.entity.draw(context, this.xPos, this.yPos);
}

/**
 * TODO [live description]
 * @return {[type]} [description]
 */
IA.prototype.live = function() {
    return [];
}

IA.prototype.move = function(xDelta, yDelta) {
    this.xPos += xDelta;
    this.yPos += yDelta;
}
