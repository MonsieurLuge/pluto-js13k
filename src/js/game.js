/**
 * Game object
 * @param {Scene} scene
 * @param {Chapters} chapters
 * @param {Player} player
 */
function Game(scene, chapters, player) {
    this.__chapters = chapters;
    this.__player   = player;
    this.__scene    = scene;
    this.__state    = 'run';
}

/**
 * Runs the game
 * @param {string} mode
 */
Game.prototype.run = function(mode) {
    // main game loop
    this.__loop(mode);
}

/**
 * Stops the game
 */
Game.prototype.stop = function() {
    this.__state = 'stop';
}

/**
 * Animate each entity (AI scripts, movements, etc)
 */
Game.prototype.__animate = function() {
    // living entities
    // for (var index = 0; index < this.__livingEntities.length; index++) {
    //     var desiredAction = this.__livingEntities[index].live(this.__environment(index));
    //
    //     if (desiredAction != undefined) {
    //         var angle = desiredAction['move']['angle'];
    //         var speed = desiredAction['move']['speed'];
    //
    //         this.__livingEntities[index].coordinates = new Coordinates(
    //             this.__livingEntities[index].coordinates().longitude() + speed * Math.cos(angle),
    //             this.__livingEntities[index].coordinates().latitude() + speed * Math.sin(angle)
    //         );
    //     }
    // }
}

/**
 * Returns the entity environment
 * @param {integer} livingEntityIndex
 * @return {array}
 */
Game.prototype.__environment = function(livingEntityIndex) {
    // var environment = [];
    //
    // // living entities
    // for (var index = 0; index < this.__livingEntities.length; index++) {
    //     if (index === livingEntityIndex) {
    //         continue;
    //     }
    //
    //     var target = this.__livingEntities[index];
    //
    //     environment.push({
    //         'type' : target.type(),
    //         'in-sight' : true,
    //         'position' : new TargetPosition(
    //             this.__livingEntities[livingEntityIndex].coordinates(),
    //             target.coordinates()
    //         ),
    //         'path-to-target' : []
    //     });
    // }
    //
    // // static entities
    // for (var index = 0; index < this.__staticEntities.length; index++) {
    //
    // }
    //
    // // TODO terrain
    //
    // return environment;
}

/**
 * Main game loop
 * @param {string} mode
 */
Game.prototype.__loop = function(mode) {
    if (this.__state !== 'run') {
        return;
    }

    // debug mode (no game loop)
    // TODO remove debug mode
    if (mode !== 'debug') {
        // game loop
        requestAnimationFrame(this.__loop.bind(this));
    }

    // game mechanics, animations, AI, etc
    // this.__animate();

    // render the scene
    this.__render();
}

/**
 * Renders the scene
 */
Game.prototype.__render = function() {
    // draw the room
    this.__chapters.current().currentRoom().draw(
        this.__scene.buffer().context2d(),
        this.__player.coordinates()
    );

    // background, post-process and scaling
    this.__scene.draw();
}
