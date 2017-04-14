const IMAGES = {
    load: function() {

        // Sprites
        game.load.image('link_up', CONSTANTS.images.link_up);
        game.load.image('link_down', CONSTANTS.images.link_down);
        game.load.image('link_left', CONSTANTS.images.link_left);
        game.load.image('link_right', CONSTANTS.images.link_right);
        game.load.spritesheet('link', 'assets/img/sprites/link.png', 16, 16);

        // Tilemaps
        game.load.image('tiles', CONSTANTS.images.tiles);

        // Various
        game.load.image('title', CONSTANTS.images.title);
    }
};
