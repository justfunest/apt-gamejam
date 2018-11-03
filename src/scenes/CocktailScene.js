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

    // TODO: Possibly a different font?
    // this.load.bitmapFont('calibri', 'assets/fonts/calibri_0.png', 'assets/fonts/calibri.fnt');
    this.load.bitmapFont('system', 'assets/fonts/system-default-font.png', 'assets/fonts/system-default-font.fnt');
  }

  create() {
    // TODO: apply background picture
    this.audioManager = new AudioManager(this);

    this.audioManager = new AnimationManager(this);
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

  startGame() {
    // TODO
  }

  restartScene() {
    // TODO
  }
}

export default CocktailScene