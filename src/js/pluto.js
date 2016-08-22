/**
 * Pluto
 * A Rogue-lite platforming game
 * JS13K - 2016
 *
 * @author: Monsieur Luge
 */

// initialization
var game = new Game(
    document.getElementById("pluto"),
    400,
    300
);

game.start(); // TODO remove, only for test purpose

// run
try {
    game.run();
} catch (errorMessage) {
    game.stop();

    console.log('Oops, something goes wrong: ', errorMessage);
}
