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
            new MaxSizeRatio(
                sceneWidth,
                sceneHeight,
                window.innerWidth,
                window.innerHeight
            )
        ),
        new Canvas(
            'buffer',
            new Size(
                sceneWidth,
                sceneHeight
            )
        ),
        new Background(
            new Canvas(
                'background',
                new MaxSizeRatio(
                    sceneWidth,
                    sceneHeight,
                    window.innerWidth,
                    window.innerHeight
                )
            )
        )
    ),
    new Chapters([
        new ChapterOne(
            new Rooms(),
            new ChapterMap(
                new ChapterTree(
                    'elevator to the surface',
                    'laboratory access',
                    new RoomsDefinitions([
                        new RoomDefinition(
                            'elevator to the surface',
                            new ElevatorBiome(),
                            new Entities(),
                            new RoomShape()
                        ),
                        new RoomDefinition(
                            'laboratory access',
                            new ScannerBiome(),
                            new Entities(),
                            new RoomShape()
                        ),
                        new RoomDefinition(
                            'test room 1',
                            new ElevatorBiome(),
                            new Entities(),
                            new RoomShape()
                        ),
                        new RoomDefinition(
                            'test room 2',
                            new ScannerBiome(),
                            new Entities(),
                            new RoomShape()
                        ),
                        new RoomDefinition(
                            'test room 3',
                            new ScannerBiome(),
                            new Entities(),
                            new RoomShape()
                        ),
                        new RoomDefinition(
                            'test room 4',
                            new ElevatorBiome(),
                            new Entities(),
                            new RoomShape()
                        ),
                        new RoomDefinition(
                            'test room 5',
                            new ScannerBiome(),
                            new Entities(),
                            new RoomShape()
                        )
                    ]),
                    new Tree()
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
