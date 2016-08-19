/**
 * Engineer object (Engineer is an Entity)
 * @param {array} items
 */
function Engineer(color, items) {
    this.color         = color;
    this.inventory     = items;
    this.life          = 100;
    this.state         = 'idle';
}

/**
 * Draws the engineer
 * @param  {[type]} context
 * @param  {integer} xPos
 * @param  {integer} yPos
 */
Engineer.prototype.draw = function(context, xPos, yPos) {
    context.fillStyle = this.color;
    context.beginPath();
    context.rect(xPos, yPos, 8, 16);
    context.fill();
}

/**
 * Take the item and put it into the inventory
 * @param  {Item} item
 * @throws message
 */
Engineer.prototype.take = function(item) {
    if (this.inventory.length >= 10) {
        throw 'inventory full';
    }

    this.inventory.push(item);
}
