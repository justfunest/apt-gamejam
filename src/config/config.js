export const components =  [
    {
        id: 'vodka',
        name: 'Vodka',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'whiskey',
        name: 'Whiskey',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'champagne',
        name: 'Champagne',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'champagne-glass',
        name: 'Champagne glass',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'martini-glass',
        name: 'Martini glass',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'shot-glass',
        name: 'Shot glass',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'whiskey-glass',
        name: 'Whiskey glass',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'red-bull',
        name: 'Red bull',
        sound: ['can_open_1', 'can_open_2']
    },
    {
        id: 'olive',
        name: 'Olive',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'lime',
        name: 'Lime',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'strawberry',
        name: 'Strawberry',
        sound: ['pour_1', 'pour_2', 'pour_3']
    },
    {
        id: 'ice',
        name: 'Ice',
        sound: ['ice']
    },
]

export const recipes = [
    {
        id: 'just-whiskey',
        name: 'Just a whiskey',
        components: ['whiskey', 'whiskey-glass'],
        power: 9
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
        power: 10
    },
    {
        id: 'whiskey-rocks',
        name: 'Whiskey on the rocks',
        components: ['ice', 'whiskey', 'whiskey-glass'],
        power: 8
    },
    {
        id: 'vodka-red-bull',
        name: 'No glass required',
        components: ['red-bull', 'vodka'],
        power: 10
    },
    {
        id: 'champagne',
        name: 'Champagne!',
        components: ['champagne', 'champagne-glass', 'strawberry'],
        power: 5
    },
    {
        id: 'champagne-martini',
        name: 'Champagne Martini',
        components: ['champagne', 'ice', 'martini-glass', 'vodka', 'strawberry'],
        power: 7
    },
    {
        id: 'vodka-lime',
        name: 'If you had one shot...',
        components: ['lime', 'vodka', 'shot-glass'],
        power: 18
    }
]


export const AUDIO_STATE = {
    resources : [
        {
            'id' : 'can_open_1',
            'filename' : 'assets/music/ftus_soda_can_open_ring_pull.mp3'
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
            'filename' : 'assets/music/zapsplat_food_drink_soda_beer_pour_small_amount_glass_fizz_001_21657.mp3'
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
            'id' : 'slurp_1',
            'filename' : 'assets/music/zapsplat_human_drink_slurp_soda_from_can_single_001_18014.mp3'
        },
        {
            'id' : 'slurp_2',
            'filename' : 'assets/music/human_slurp_drink_from_cup_with_gulps_001.mp3'
        },
    ]
};

export const IMAGE_STATE = {
    resources : [
        {'id' : 'vodka', 'filename' : 'assets/images/vodka.png'},
        {'id' : 'whiskey', 'filename' : 'assets/images/whiskey.png'},
        {'id' : 'champagne', 'filename' : 'assets/images/champagne.png'},
        {'id' : 'champagne-glass', 'filename' : 'assets/images/champagne-glass.png'},
        {'id' : 'martini-glass', 'filename' : 'assets/images/martini-glass.png'},
        {'id' : 'shot-glass', 'filename' : 'assets/images/shot-glass.png'},
        {'id' : 'whiskey-glass', 'filename' : 'assets/images/whiskey-glass.png'},
        {'id' : 'red-bull', 'filename' : 'assets/images/red-bull.png'},
        {'id' : 'olive', 'filename' : 'assets/images/olive.png'},
        {'id' : 'lime', 'filename' : 'assets/images/lime.png'},
        {'id' : 'strawberry', 'filename' : 'assets/images/strawberry.png'},
        {'id' : 'ice', 'filename' : 'assets/images/ice.png'},
        {'id' : 'outline', 'filename' : 'assets/images/outline.png'},
        {'id' : 'field-bg', 'filename' : 'assets/images/field-bg.png'},
        {'id' : 'bg', 'filename' : 'assets/images/bg.jpg'},
        {'id' : 'character', 'filename' : 'assets/images/character.png'},
        {'id' : 'healthbar_empty', 'filename' : 'assets/images/healthbar/StomachBase.png'},
        {'id' : 'healthbar_full', 'filename' : 'assets/images/healthbar/StomachFluid.png'},
        {'id' : 'healthbar_mask', 'filename' : 'assets/images/healthbar/StomachMask.png'}
    ]
};

export const ANIMATIONS = {
    angry : {
        name : 'angry',
        frames : { start: 1, end: 15, zeroPad: 2, suffix: '.png', prefix: 'a' },
        frameRate: 10,
        dir:'assets/images/kuri0',
        json: 'assets/images/kuri0/kuri.json'
    },
    happy : {
        name : 'happy',
        frames : { start: 1, end: 10, zeroPad: 2, suffix: '.png', prefix: 'o' },
        frameRate: 10,
        dir: 'assets/images/happy',
        json: 'assets/images/happy/onnelik.json'
    },
    drunk : {
        name : 'drunk',
        frames : { start: 1, end: 60, zeroPad: 2, suffix: '.png', prefix: 'k' },
        frameRate: 10,
        repeat: -1,
        dir: 'assets/images/drunk',
        json: 'assets/images/drunk/koikumine.json'
    },
    drinks : {
        name : 'drinks',
        frames : { start: 1, end: 60, zeroPad: 2, suffix: '.png', prefix: 'j' },
        frameRate: 20,
        dir: 'assets/images/drinks',
        json: 'assets/images/drinks/joob.json'
    },
}
export const CHARACTER_STATE = {
    soberness: {
        max : 500,
        current: 250,
        decayRate: 0.02
    },
    position: {
        x: 900,
        y: 430
    },
    scale: {
        x: 0.6,
        y: 0.6
    },
    alive : true,
    sounds: {
        drink: ['slurp_1','slurp_2','burp']
    },
    animations: {
        drink: ['happy', 'angry', 'drinks']
    },
    sprites: {
        init: 'character'
    }
};