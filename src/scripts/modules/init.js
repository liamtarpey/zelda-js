let game; // Main game object
let gameState = 'menu'; // Saves current game state
let map; // sprite map
let link; // link sprite



const keyControls = () => {
    if(keyboard.enter.isDown) {
        START_GAME();
    } else if(keyboard.up.isDown) {
        link.y--;
    } else if(keyboard.down.isDown) {
        link.y++;
    } else if(keyboard.left.isDown) {
        link.x--;
    } else if(keyboard.right.isDown) {
        link.x++;
    }
};

const preload = () => {
    IMAGES.load();
    AUDIO.play(CONSTANTS.sounds.title);
    KEYS.assign();
};

const create = () => {
    game.stage.backgroundColor = '#ffffff';
    // game.add.sprite(0, 0, 'title');
};

const update = () => {
    keyControls();
};

const START_GAME = () => {

    // If game is in progress and enter key is hit
    // return out of this as we don't want to restart the game
    if(gameState === 'game') {
        return false;
    }

    gameState = 'game';
    AUDIO.play(CONSTANTS.sounds.theme);
    link = game.add.sprite(100, 20, 'link');
    link.scale.x = 16;
    link.scale.y = 10;
};

// Init phaser game engine
game = new Phaser.Game(CONSTANTS.canvasWidth, CONSTANTS.canvasHeight, Phaser.AUTO, CONSTANTS.gameWrapper, {
    preload: preload,
    create: create,
    update: update
});
