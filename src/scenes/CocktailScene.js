import Field from '../gameObjects/Field'
import Charater from '../gameObjects/Character'

class CocktailScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'CocktailScene'})
  }

  preload() {
    this.load.image('vodka', 'assets/images/kb-arrow-up.png');
    this.load.image('beer', 'assets/images/kb-arrow-left.png');
    this.load.image('whiskey', 'assets/images/kb-arrow-down.png');
    this.load.image('soda', 'assets/images/kb-arrow-right.png');
    this.load.image('character', 'assets/images/character.png');
    this.load.image('healthbar', 'assets/images/bar.png');

    // TODO: Possibly a different font?
    this.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
  }

  create() {
    this.character = new Charater(this, 'sprite');
    this.field = new Field(this, this.character);
    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)
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