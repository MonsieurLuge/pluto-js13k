/**
 * Pluto
 * A Rogue-lite platforming game
 * JS13K - 2016
 *
 * @author: Monsieur Luge
 */

// initialization
var game = new Game(
    new Scene(
        new Canvas(
            'pluto',
            new MaxWidthRatio(
                400,
                300,
                window.innerWidth,
                window.innerHeight
            ),
            new MaxHeightRatio(
                400,
                300,
                window.innerWidth,
                window.innerHeight
            )
        )
    ),
    new Canvas(
        'buffer',
        400,
        300
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
