let linkSprite;

const LINK = {

    set: function() {
        linkSprite = game.add.sprite(0, 0, 'link');
        // linkSprite.scale.x = 2;
        // linkSprite.scale.y = 2;
        linkSprite.frame = 0;
    },

    setDirection: function(dir) {
        switch(dir) {
            case 'down':
                linkSprite.frame = 0;
                break;
            case 'up':
                linkSprite.frame = 4;
                break;
            case 'left':
                linkSprite.frame = 2;
                break;
            case 'right':
                linkSprite.frame = 6;
                break;
        }
    }
};
