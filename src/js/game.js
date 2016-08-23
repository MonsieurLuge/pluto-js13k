/**
 * Game object
 * @param {Scene}  scene
 * @param {Canvas} buffer
 * @param {Chapters} chapters
 */
function Game(scene, buffer, chapters, player) {
    this.buffer         = buffer;
    this.chapters       = chapters;
    this.keyboard       = undefined; // TODO add keyboard to the game
    this.livingEntities = [];
    this.player         = player;
    this.scene          = scene;
    this.state          = 'run';
    this.staticEntities = [];
}

/**
 * Runs the game
 */
Game.prototype.run = function(mode) {
    // main game loop
    this.__loop(mode);
}

/**
 * Stops the game
 */
Game.prototype.stop = function() {
    this.state = 'stop';
}

/**
 * Animate each entity (AI scripts, movements, etc)
 */
Game.prototype.__animate = function() {
    // living entities
    for (var index = 0; index < this.livingEntities.length; index++) {
        var desiredAction = this.livingEntities[index].live(this.__environment(index));

        if (desiredAction != undefined) {
            var angle = desiredAction['move']['angle'];
            var speed = desiredAction['move']['speed'];

            this.livingEntities[index].coordinates = new Coordinates(
                this.livingEntities[index].coordinates.longitude + speed * Math.cos(angle),
                this.livingEntities[index].coordinates.latitude + speed * Math.sin(angle)
            );
        }
    }
}

/**
 * Returns the entity environment
 * @param  {integer} livingEntityIndex
 * @return {array}
 */
Game.prototype.__environment = function(livingEntityIndex) {
    var environment = [];

    // living entities
    for (var index = 0; index < this.livingEntities.length; index++) {
        if (index == livingEntityIndex) {
            continue;
        }

        var target = this.livingEntities[index];

        environment.push({
            'type' : target.type(),
            'in-sight' : true,
            'position' : new TargetPosition(
                this.livingEntities[livingEntityIndex].coordinates,
                target.coordinates
            ),
            'path-to-target' : []
        });
    }

    // static entities
    for (var index = 0; index < this.staticEntities.length; index++) {

    }

    // TODO terrain

    return environment;
}

/**
 * Main game loop
 * @param {string}  mode
 */
Game.prototype.__loop = function(mode) {
    if (this.state == 'run') {
        if (mode != 'debug') { // TODO remove debug
            requestAnimationFrame(this.__loop.bind(this));
        }

        // game mechanics, animations, IA, etc
        this.__animate();

        // render the scene
        this.__render();
    }
}

/**
 * Renders the scene
 */
Game.prototype.__render = function() {
    var canvas  = this.buffer.canvas();
    var context = this.buffer.context2d();

    // TODO draw background
    context.fillStyle = "#313131";
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();

    // draw "static" entities
    for (var index = 0; index < this.staticEntities.length; index++) {
        this.staticEntities[index].draw(context);
    }

    // draw "living" entities
    for (var index = 0; index < this.livingEntities.length; index++) {
        this.livingEntities[index].draw(context);
    }

    // send the resulting image to the scene
    this.scene.scaleBuffer(this.buffer);
}
