/**
 * TODO [Game description]
 * @param {[type]} canvas      [description]
 * @param {[type]} sceneWidth  [description]
 * @param {[type]} sceneHeight [description]
 */
function Game(canvas, sceneWidth, sceneHeight) {
    this.canvas         = canvas;
    this.context        = canvas.getContext('2d');
    this.keyboard       = undefined; // TODO add keyboard to the game
    this.livingEntities = [];
    this.sceneWidth     = sceneWidth;
    this.sceneHeight    = sceneHeight;
    this.seed           = Math.random();
    this.state          = 'stop';
    this.staticEntities = [];
}


/**
 * Scale the scene to fit the screen on each window update
 */
Game.prototype.__scaleScene = function() {
    minScaleValue = Math.min(
        window.innerWidth / this.sceneWidth,
        window.innerHeight / this.sceneHeight
    );

    this.canvas.width  = this.sceneWidth * minScaleValue;
    this.canvas.height = this.sceneHeight * minScaleValue;

    this.context.scale(minScaleValue, minScaleValue);
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
            Math.round(Math.random() * 392),
            Math.round(Math.random() * 284)
        )
    );

    this.livingEntities.push(
        new AI(
            new Engineer(
                'ai engineer #1',
                '#902080',
                []
            ),
            Math.round(Math.random() * 392),
            Math.round(Math.random() * 284)
        )
    );

    // TODO scale the scene on each window resize
    // window.addEventListener('resize', this.scaleScene, false);

    // scale the scene once before the game really starts
    this.__scaleScene();

    // it's now ok to run the game
    this.state = 'run';
};

/**
 * Runs the game
 */
Game.prototype.run = function() {
    if (this.state == 'run') {
        // game loop
        requestAnimationFrame(this.run.bind(this));

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

            this.livingEntities[index].xPos += speed * Math.cos(angle);
            this.livingEntities[index].yPos += speed * Math.sin(angle);
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
            'position' : this.__targetPosition(
                this.livingEntities[livingEntityIndex].coordinates(),
                target.coordinates()
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
    // TODO draw background
    this.context.fillStyle = "#313131";
    this.context.beginPath();
    this.context.rect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fill();

    // TODO draw "static" entities
    for (var index = 0; index < this.staticEntities.length; index++) {
        this.staticEntities[index].draw(this.context);
    }

    // draw "living" entities
    for (var index = 0; index < this.livingEntities.length; index++) {
        this.livingEntities[index].draw(this.context);
    }
}

/**
 * Scale the scene to fit the screen on each window update
 */
Game.prototype.__scaleScene = function() {
    minScaleValue = Math.min(
        window.innerWidth / this.sceneWidth,
        window.innerHeight / this.sceneHeight
    );

    this.canvas.width  = this.sceneWidth * minScaleValue;
    this.canvas.height = this.sceneHeight * minScaleValue;

    this.context.scale(minScaleValue, minScaleValue);
}

/**
 * Returns the target's position
 * @param  {array} entityCoordinates
 * @param  {array} targetCoordinates
 * @return {array} [angle, distance]
 */
Game.prototype.__targetPosition = function(entityCoordinates, targetCoordinates) {
    var xDistance = targetCoordinates[0] - entityCoordinates[0];
    var yDistance = targetCoordinates[1] - entityCoordinates[1];

    return {
        'angle' : Math.round(
            (Math.atan2(yDistance, xDistance) / (Math.PI * 2)) * 360
        ),
        'distance' : Math.round(
            Math.sqrt(
                Math.pow(xDistance, 2) + Math.pow(yDistance, 2)
            )
        )
    }
}
