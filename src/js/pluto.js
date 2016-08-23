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
    ),
    new Chapters([
        new Chapter('the_awakening', 1)
    ]),
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

game.start(); // TODO remove, only for test purpose

// run
try {
    game.run('debug');
    // game.run();
} catch (errorMessage) {
    game.stop();

    console.log('Oops, something goes wrong: ', errorMessage);
}
