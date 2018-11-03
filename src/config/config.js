export const components =  [
    {
        id: 'vodka',
        name: 'Vodka'
    },
    {
        id: 'whiskey',
        name: 'Whiskey'
    },
    {
        id: 'champagne-glass',
        name: 'Champagne glass'
    },
    {
        id: 'martini-glass',
        name: 'Martini glass'
    },
    {
        id: 'shot-glass',
        name: 'Shot glass'
    },
    {
        id: 'whiskey-glass',
        name: 'Whiskey glass'
    },
    {
        id: 'red-bull',
        name: 'Red bull'
    },
    {
        id: 'olive',
        name: 'Olive'
    }
]

export const recipes = [
    {
        id: 'just-whiskey',
        name: 'Just a whiskey',
        components: ['whiskey', 'whiskey-glass'],
        power: 8
    },
    {
        id: 'vodka-martini',
        name: 'Vodka Martini',
        components: ['vodka', 'olive', 'martini-glass'],
        power: 15
    },
    {
        id: 'smooth-operator',
        name: 'Smooth Operator',
        components: ['whiskey', 'whiskey-glass', 'red-bull'],
        power: 18
    },
    {
        id: 'whiskey-rocks',
        name: 'Whiskey on the rocks',
        components: ['ice', 'whiskey', 'whiskey-glass'],
        power: 7
    }
]


export const AUDIO_STATE = {
    resources : [
        {
            'id' : 'can_open_1',
            'filename' : 'assets/music/ftus_soda_can_open_ring_pull.mp3'
        },
        {
            'id' : 'slurp',
            'filename' : 'assets/music/human_slurp_drink_from_cup_with_gulps_001.mp3'
        },
        {
            'id' : 'can_open_2',
            'filename' : 'assets/music/zapsplat_food_drink_can_soda_open_short_18002.mp3'
        },
        {
            'id' : 'ice',
            'filename' : 'assets/music/zapsplat_food_drink_ice_cube_drop_into_empty_glass_002_19424.mp3'
        },
        {
            'id' : 'pour_1',
            'filename' : 'assets/music/zapsplat_food_drink_small_measure_spirit_pour_into_shot_glass_001_21878.mp3'
        },
        {
            'id' : 'pour_2',
            'filename' : 'assets/music/zapsplat_food_drink_soda_beer_pour_small_amount_glass_fizz_001_21657.mp33'
        },
        {
            'id' : 'pour_3',
            'filename' : 'assets/music/zapsplat_food_drink_still_pour_from_jug_into_small_glass_001_19435.mp3'
        },
        {
            'id' : 'burp',
            'filename' : 'assets/music/zapsplat_human_burp_soda_001_18005.mp3'
        },
        {
            'id' : 'slurp',
            'filename' : 'assets/music/zapsplat_human_drink_slurp_soda_from_can_single_001_18014.mp3'
        }
    ]
};

export const IMAGE_STATE = {
    resources : [
        {'id' : 'vodka', 'filename' : 'assets/images/vodka.png'},
        {'id' : 'whiskey', 'filename' : 'assets/images/whiskey.png'},
        {'id' : 'champagne-glass', 'filename' : 'assets/images/champagne-glass.png'},
        {'id' : 'martini-glass', 'filename' : 'assets/images/martini-glass.png'},
        {'id' : 'shot-glass', 'filename' : 'assets/images/shot-glass.png'},
        {'id' : 'whiskey-glass', 'filename' : 'assets/images/whiskey-glass.png'},
        {'id' : 'red-bull', 'filename' : 'assets/images/red-bull.png'},
        {'id' : 'olive', 'filename' : 'assets/images/olive.png'},
        {'id' : 'ice', 'filename' : 'assets/images/ice.png'},
        {'id' : 'outline', 'filename' : 'assets/images/outline.png'},
        {'id' : 'character', 'filename' : 'assets/images/character.png'},
        {'id' : 'healthbar', 'filename' : 'assets/images/bar.png'}
    ]
};

export const ANIMATIONS = {
    angry : {
       name : 'angry',
       frames : { start: 1, end: 15, zeroPad: 2, suffix: '.png', prefix: 'k' },
       frameRate: 10
    },
    happy : {
        name : 'happy',
        frames : { start: 1, end: 10, zeroPad: 2, suffix: '.png', prefix: 'o' },
        frameRate: 10
    },
    drunk : {
        name : 'drunk',
        frames : { start: 1, end: 60, zeroPad: 2, suffix: '.png', prefix: 'h' },
        frameRate: 10
    }
}
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