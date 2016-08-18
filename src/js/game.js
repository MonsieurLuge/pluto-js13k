function Game(canvas, sceneWidth, sceneHeight) {
    this.canvas         = canvas;
    this.context        = canvas.getContext('2d');
    this.keyboard       = undefined; // TODO add keyboard to the game
    this.livingEntities = [];
    this.sceneWidth     = sceneWidth;
    this.sceneHeight    = sceneHeight;
    this.seed           = Math.random();
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
 */
Game.prototype.start = function() {
    // add some living entities
    this.livingEntities.push(
        new Player(
            undefined, // TODO add the mouse to the player,
            new Engineer([]),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 300)
        )
    );

    this.livingEntities.push(
        new LivingEntity(
            new Engineer([]),
            Math.round(Math.random() * 400),
            Math.round(Math.random() * 300)
        )
    );

    // TODO scale the scene on each window resize
    // window.addEventListener('resize', this.scaleScene, false);

    // scale the scene once before the game really starts
    this.scaleScene();

    this.run();
};

/**
 * Runs the game
 */
Game.prototype.run = function() {
    requestAnimationFrame(this.run.bind(this));

    // game mechanics, animations, IA, etc
    this.animate();

    // render the scene
    this.render();
}

Game.prototype.animate = function() {
    // living entities
    for (var index = 0; index < this.livingEntities.length; index++) {
        this.livingEntities[index].live();
    }

    // TODO animate particles
}

Game.prototype.render = function() {
    // TODO draw background
    this.context.fillStyle = "#313131";
    this.context.beginPath();
    this.context.rect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fill();

    // TODO draw "static" entities

    // draw "living" entities
    for (var index = 0; index < this.livingEntities.length; index++) {
        this.livingEntities[index].draw(this.context);
    }
}
