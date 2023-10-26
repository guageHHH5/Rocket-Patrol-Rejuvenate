/*
Eric Wang
Rocket Patrol: Rejuvenate
around 3 hours
A, D for left/right movement, mouse L Click to fire (? points)
Adding a countdown timer (3 point)
*/
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;

let keyF, keyR, keyLEFT, keyRIGHT, pointer;


