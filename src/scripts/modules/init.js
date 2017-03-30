// Init phaser game engine
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

var preload = function() {
    console.log('preloading');
};

var create = function() {
    console.log('create');
};

var update = function() {
    console.log('update');
};
