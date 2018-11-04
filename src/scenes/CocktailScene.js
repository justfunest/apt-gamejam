import Field from '../gameObjects/Field'
import Charater from '../gameObjects/Character'
import AudioManager from '../gameObjects/AudioManager'
import ImageManager from '../gameObjects/ImageManager'
import AnimationManager from '../gameObjects/AnimationManager'

class CocktailScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'CocktailScene'})
  }

  preload() {
    ImageManager.loadResources(this);
    AudioManager.loadResources(this);
    AnimationManager.loadResources(this);

    this.load.bitmapFont('system', 'assets/fonts/system-default-font.png', 'assets/fonts/system-default-font.fnt');
  }

  create() {
    // TODO: Intro menu scene
    // TODO: How-to-play scene? (Possibly communicate this info in Intro scene)
    // TODO: speed up sobering up
    this.audioManager = new AudioManager(this);

    this.audioManager = new AnimationManager(this);

    // TODO: hardcoded image dimensions and offsets
    this.bg = this.add.sprite(600, 400, 'bg')
    this.bg.displayWidth = 1200
    this.bg.displayHeight = 800

    this.character = new Charater(this, 'sprite');
    this.field = new Field(this, this.character);

    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)

    // TODO: lose condition
    // TODO: win condition
  }

  update(time, delta) {
    this.field.update(time, delta);
    this.character.update(time, delta);
  }
}

export default CocktailScene