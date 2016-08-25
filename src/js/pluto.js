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
        ),
        new Background(
            new Canvas(
                'background',
                sceneWidth,
                sceneHeight
            )
        )
    ),
    new Canvas(
        'buffer',
        sceneWidth,
        sceneHeight
    ),
    new Chapters([
        new Chapter(
            new ChapterOne(
                new ChapterMap(
                    new Rooms(
                        new Room(
                            'elevator to the surface',
                            'entrance',
                            new Terrain(0, [])
                        ),
                        new Room(
                            'laboratory access',
                            'exit',
                            new Terrain(0, [])
                        )
                    )
                )
            )
        )
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

// run
try {
    game.run('debug');
    // game.run();
} catch (errorMessage) {
    game.stop();

    console.log('oops, something goes wrong: ', errorMessage);
}
