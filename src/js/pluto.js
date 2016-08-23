/**
 * Pluto
 * A Rogue-lite platforming game
 * JS13K - 2016
 *
 * @author: Monsieur Luge
 */

// initialization
var sceneHeight = 300;
var sceneWidth  = 400;

var game = new Game(
    new Scene(
        new Canvas(
            'pluto',
            new MaxWidthRatio(
                sceneWidth,
                sceneHeight,
                window.innerWidth,
                window.innerHeight
            ),
            new MaxHeightRatio(
                sceneWidth,
                sceneHeight,
                window.innerWidth,
                window.innerHeight
            )
        )
    ),
    new Canvas(
        'buffer',
        sceneWidth,
        sceneHeight
    )
);

game.start(); // TODO remove, only for test purpose

// run
try {
    game.run('debug');
    // game.run();
} catch (errorMessage) {
    game.stop();

    console.log('Oops, something goes wrong: ', errorMessage);
}
