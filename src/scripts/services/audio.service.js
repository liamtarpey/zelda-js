// Vars
const pauseSound = document.getElementById('js-pause-sound');
const resumeSound = document.getElementById('js-resume-sound');

let sound;

/**
 * Audio constructor
 * Available functions:
 * - play - stops sound and plays requested sound
 * @type {Constructor}
 */
const AUDIO = {
    play: function(title) {

        if(!title) return false;
        if(sound) this.pause();

        sound = new Audio(title);
        this.resume();
    },
    pause: function() {
        sound.pause();

        pauseSound.style.display = 'none';
        resumeSound.style.display = 'block';
    },
    resume: function() {
        sound.play();

        pauseSound.style.display = 'block';
        resumeSound.style.display = 'none';
    }
};

// Music player controls
pauseSound.addEventListener('click', AUDIO.pause);
resumeSound.addEventListener('click', AUDIO.resume);
