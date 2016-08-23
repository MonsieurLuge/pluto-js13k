/**
 * Coordinates object
 * @param {integer} longitude
 * @param {integer} latitude
 */
function Coordinates(longitude, latitude) {
    this.__latitude  = latitude;
    this.__longitude = longitude;
}

/**
 * Returns the latitude
 * @return {integer}
 */
Coordinates.prototype.latitude = function() {
    return Math.round(this.__latitude);
}

/**
 * Returns the longitude
 * @return {integer}
 */
Coordinates.prototype.longitude = function() {
    return Math.round(this.__longitude);
}
