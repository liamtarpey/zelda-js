let gameState;

const STATE = {

    get: function() {
        return gameState;
    },

    set: function(state) {

        if(!state) {
            console.log('Unable to set state, parameter missing!');
            return false;
        }

        gameState = state;
    }
};
