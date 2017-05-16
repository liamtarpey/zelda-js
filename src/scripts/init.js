const Constants = require('../constants.js');
const ImagesFactory = require('../services/image.service.js');

let game; // Main game object
let map; // sprite map
let titleImage;
let link; // link sprite

const keyControls = () => {
    if(keyboard.enter.isDown) {
        START_GAME();
    } else if(keyboard.up.isDown) {
        LINK.setDirection('up');
        linkSprite.y--;
    } else if(keyboard.down.isDown) {
        LINK.setDirection('down');
        linkSprite.y++;
    } else if(keyboard.left.isDown) {
        LINK.setDirection('left');
        linkSprite.x--;
    } else if(keyboard.right.isDown) {
        LINK.setDirection('right');
        linkSprite.x++;
    }
};

const preload = () => {
    // STATE.set('menu');
    // IMAGES.load();
    // AUDIO.play(CONSTANTS.sounds.title);
    // ImagesFactory.load();
    // AUDIO.play(Constants.sounds.title);
    // KEYS.assign();
};

const create = () => {
    game.stage.backgroundColor = '#ffffff';
    titleImage = game.add.sprite(0, 0, 'title');
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

    // STATE.set('game');
    // titleImage.destroy();
    // LINK.set();
    // AUDIO.play(CONSTANTS.sounds.theme);
    // gameState = 'game';
    // AUDIO.play(Constants.sounds.theme);
    // link = game.add.sprite(100, 20, 'link');
    // link.scale.x = 16;
    // link.scale.y = 10;
};

// Init phaser game engine
game = new Phaser.Game(Constants.canvasWidth, Constants.canvasHeight, Phaser.AUTO, Constants.gameWrapper, {
    preload: preload,
    create: create,
    update: update
});
