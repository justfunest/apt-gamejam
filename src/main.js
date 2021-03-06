import 'phaser';
import IntroScene from './scenes/IntroScene'
import TutorialScene from './scenes/TutorialScene'
import CocktailScene from './scenes/CocktailScene';
import GameOverScene from './scenes/GameOverScene'

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
        IntroScene,
        TutorialScene,
        CocktailScene,
        GameOverScene,
    ]
};

const game = new Phaser.Game(config);