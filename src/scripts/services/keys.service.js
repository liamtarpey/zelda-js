let keyboard = {};

const KEYS = {
    assign: function() {
        keyboard.up    = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        keyboard.down  = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        keyboard.left  = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        keyboard.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        keyboard.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    }
};
