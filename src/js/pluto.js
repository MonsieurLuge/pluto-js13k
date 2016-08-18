/**
 * Pluto
 * A Rogue-lite platforming game
 * JS13K - 2016
 *
 * @author: Monsieur Luge
 */

var game = new Game(
    document.getElementById("pluto"),
    400,
    300
);

try {
    game.start();
} catch (error) {
    console.log('Oops, something goes wrong : ' + error)
}
