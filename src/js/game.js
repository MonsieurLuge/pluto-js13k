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
Game.prototype.scaleScene = function() {
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
                '#905000',
                []
            ),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 300)
        )
    );

    this.livingEntities.push(
        new IA(
            new Engineer(
                '#902080',
                []
            ),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 300)
        )
    );

    // TODO scale the scene on each window resize
    // window.addEventListener('resize', this.scaleScene, false);

    // scale the scene once before the game really starts
    this.scaleScene();

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
        this.animate();

        // render the scene
        this.render();
    }
}

/**
 * TODO [animate description]
 * @return {[type]} [description]
 */
Game.prototype.animate = function() {
    // living entities
    for (var index = 0; index < this.livingEntities.length; index++) {
        var desiredAction = this.livingEntities[index].live();

        // if (desiredAction['action'] == 'move-left') {
        //     if (this.livingEntities[index].xPos > 10) {
        //         this.livingEntities[index].move(-1 * desiredAction['param'], 0);
        //     }
        // }
    }
}

/**
 * TODO [render description]
 * @return {[type]} [description]
 */
Game.prototype.render = function() {
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

Game.prototype.stop = function() {
    this.state = 'stop';
}
