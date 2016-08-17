function Game(canvas, sceneWidth, sceneHeight) {
    this.canvas         = canvas;
    this.context        = canvas.getContext('2d');
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
 * Starts the game
 */
Game.prototype.start = function() {
    // add some living entities
    this.livingEntities.push(
        new LivingEntity(
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

    this.render();
};

/**
 * Renders the entire scene
 */
Game.prototype.render = function() {
    // requestAnimationFrame(this.render.bind(this));

    // draw background
    // TODO
    this.context.fillStyle = "#313131";
    this.context.beginPath();
    this.context.rect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fill();

    // draw "static" entities
    // TODO

    // draw "living" entities
    for (var index = 0; index < this.livingEntities.length; index++) {
        this.livingEntities[index].draw(this.context);
    }
};
