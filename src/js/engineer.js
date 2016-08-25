/**
 * Engineer object (Engineer is an Entity)
 * @param {array} items
 */
function Engineer(name, color, items) {
    this.color     = color;
    this.inventory = items;
    this.life      = 100;
    this.name      = name;
    this.state     = 'idle';
}

/**
 * Draws the engineer
 * @param  {CanvasRenderingContext2D} context
 * @param  {Coordinates}              coordinates
 */
Engineer.prototype.draw = function(context, coordinates) {
    context.fillStyle = this.color;
    context.beginPath();
    context.rect(coordinates.longitude, coordinates.latitude, 8, 16);
    context.fill();
}

/**
 * Returns the entity name
 * @return {string}
 */
Engineer.prototype.name = function() {
    return this.name;
}

/**
 * Returns the next action to proceed
 * @param {array} environment
 * @return {Action}
 */
Engineer.prototype.nextAction = function(environment) {
    for (var index = 0; index < environment.length; index++) {
        var target = environment[index];

        console.log(this.name + ' : [' + target.position.distance() + 'px ' + target.position.angle() + '°] to ' + target['type']);
    }

    // go straight to the player if he is reachable
    if (target.position.distance() < 200 && target.position.distance() > 12) {
        return {
            'move' : {
                'angle' : target.position.angle(),
                'speed' : 2
            }
        }
    }

    return undefined;
}

/**
 * Take the item and put it into the inventory
 * @param  {Item} item
 * @throws {string}
 */
Engineer.prototype.take = function(item) {
    if (this.inventory.length >= 10) {
        throw 'inventory full';
    }

    this.inventory.push(item);
}
