/**
 * Game object
 * @param {Scene} scene
 * @param {Canvas} buffer
 */
function Game(scene, buffer) {
    this.buffer         = buffer;
    this.keyboard       = undefined; // TODO add keyboard to the game
    this.livingEntities = [];
    this.scene          = scene;
    this.state          = 'stop';
    this.staticEntities = [];
}

/**
 * Initialize and starts the game
 * TODO remove this method and use only the constructor
 */
Game.prototype.start = function() {
    // add some entities for test purpose
    this.livingEntities.push(
        new Player(
            undefined, // TODO add the mouse to the player,
            new Engineer(
                'player',
                '#905000',
                []
            ),
            new Coordinates(
                Math.round(Math.random() * 392),
                Math.round(Math.random() * 284)
            )
        )
    );

    this.livingEntities.push(
        new AI(
            new Engineer(
                'ai engineer #1',
                '#902080',
                []
            ),
            new Coordinates(
                Math.round(Math.random() * 392),
                Math.round(Math.random() * 284)
            )
        )
    );

    // it's now ok to run the game
    this.state = 'run';
};

/**
 * Runs the game
 */
Game.prototype.run = function(mode) {
    if (this.state == 'run') {
        // game loop
        if (mode != 'debug') { // TODO remove debug
            requestAnimationFrame(this.run.bind(this));
        }

        // game mechanics, animations, IA, etc
        this.__animate();

        // render the scene
        this.__render();
    }
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
