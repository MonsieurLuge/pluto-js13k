function TargetPosition(entityCoordinates, targetCoordinates) {
    this.entityCoordinates = entityCoordinates;
    this.targetCoordinates = targetCoordinates;
    this.cacheAngle        = undefined;
    this.cacheDistance     = undefined;
}

/**
 * Returns the angle (in Celsius) to the target entity
 * @return {float}
 */
TargetPosition.prototype.angle = function() {
    if (this.cacheAngle) {
        return this.cacheAngle;
    }

    var yDistance = this.targetCoordinates.latitude - this.entityCoordinates.latitude;
    var xDistance = this.targetCoordinates.longitude - this.entityCoordinates.longitude;

    this.cacheAngle = Math.atan2(yDistance, xDistance) / (Math.PI * 2) * 360;

    return this.cacheAngle;
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
