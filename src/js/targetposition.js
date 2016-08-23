/**
 * TargetPosition object
 * @param {Coordinates} entityCoordinates
 * @param {Coordinates} targetCoordinates
 */
function TargetPosition(entityCoordinates, targetCoordinates) {
    this.__entityCoordinates = entityCoordinates;
    this.__targetCoordinates = targetCoordinates;
    this.__cacheAngle        = undefined;
    this.__cacheDistance     = undefined;
}

/**
 * Returns the angle (in Celsius) to the target entity
 * @return {float}
 */
TargetPosition.prototype.angle = function() {
    if (this.__cacheAngle) {
        return this.__cacheAngle;
    }

    var yDistance = this.__targetCoordinates.latitude() - this.__entityCoordinates.latitude();
    var xDistance = this.__targetCoordinates.longitude() - this.__entityCoordinates.longitude();

    this.__cacheAngle = Math.atan2(yDistance, xDistance) / (Math.PI * 2) * 360;

    return this.__cacheAngle;
}

/**
 * Returns the distance to the target entity
 * @return {float}
 */
TargetPosition.prototype.distance = function() {
    if (this.cacheDistance) {
        return this.cacheDistance;
    }

    var yDistance = this.targetCoordinates.latitude - this.entityCoordinates.latitude;
    var xDistance = this.targetCoordinates.longitude - this.entityCoordinates.longitude;

    this.cacheDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

    return this.cacheDistance;
}
