export const AUDIO_STATE = {
    resources : [
        {
            'id' : 'sfx',
            'filename' : 'assets/audio/sfx.ogg'
        }
    ]
};

export const IMAGE_STATE = {
    resources : [
        {
            'id' : 'vodka',
            'filename' : 'assets/audio/sfx.ogg'
        }
    ]
};

this.load.image('vodka', 'assets/images/kb-arrow-up.png');
this.load.image('beer', 'assets/images/kb-arrow-left.png');
this.load.image('whiskey', 'assets/images/kb-arrow-down.png');
this.load.image('soda', 'assets/images/kb-arrow-right.png');
this.load.image('character', 'assets/images/character.png');
this.load.image('healthbar', 'assets/images/bar.png');

export const CHARACTER_STATE = {
    soberness: {
        max : 500,
        current: 500,
        decayRate: 0.05
    },
    position: {
        x: 900,
        y: 400
    },
    alive : true,
    sprites: {
        init: 'character'
    }
};