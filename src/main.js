import 'phaser';
import TestScene from './scenes/TestScene'
import CocktailScene from './scenes/CocktailScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    // pixelArt: true,
    // roundPixels: true,
    parent: 'content',
    width: 1200,
    height: 800,
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 800 },
    //         debug: false
    //     }
    // },
    scene: [
        //TestScene
        CocktailScene
    ]
};

const game = new Phaser.Game(config);