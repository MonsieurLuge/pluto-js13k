/**
 * Player object (Player is a "living entity")
 * @param {[type]} mouse
 * @param {Entity} entity
 * @param {Coordinates} coordinates
 */
function Player(mouse, entity, coordinates) {
    var self         = this;
    this.entity      = entity;
    this.mouse       = mouse;
    this.coordinates = coordinates; // TODO move this to the Game object
}

/**
 * Returns the entity coordinates
 * @return {Coordinates}
 */
// Player.prototype.coordinates = function() {
//     return self.coordinates;
// }

/**
 * TODO [draw description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
Player.prototype.draw = function(context) {
    this.entity.draw(
        context,
        this.coordinates
    );
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
