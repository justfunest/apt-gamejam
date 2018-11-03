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
        {'id' : 'vodka', 'filename' : 'assets/images/vodka.png'},
        {'id' : 'whiskey', 'filename' : 'assets/images/whiskey.png'},
        {'id' : 'beer', 'filename' : 'assets/images/kb-arrow-left.png'},
        {'id' : 'soda', 'filename' : 'assets/images/kb-arrow-right.png'},
        {'id' : 'champagne-glass', 'filename' : 'assets/images/champagne-glass.png'},
        {'id' : 'martini-glass', 'filename' : 'assets/images/martini-glass.png'},
        {'id' : 'shot-glass', 'filename' : 'assets/images/shot-glass.png'},
        {'id' : 'whiskey-glass', 'filename' : 'assets/images/whiskey-glass.png'},
        {'id' : 'red-bull', 'filename' : 'assets/images/red-bull.png'},
        {'id' : 'olive', 'filename' : 'assets/images/olive.png'},
        {'id' : 'character', 'filename' : 'assets/images/character.png'},
        {'id' : 'healthbar', 'filename' : 'assets/images/bar.png'}

    ]
};

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