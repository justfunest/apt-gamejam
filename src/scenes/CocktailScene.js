import Field from '../gameObjects/Field'

class CocktailScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'CocktailScene'})
  }

  preload() {
    this.load.image('arrow-up', 'assets/images/kb-arrow-up.png');
  }

  create() {
    const sprite = this.add.sprite(200, 200, 'arrow-up')
    this.field = new Field(sprite)
  }

  update(time, delta) {
    this.field.update(time, delta)
  }

  startGame() {
    // TODO
  }

  restartScene() {
    // TODO
  }
}

export default CocktailScene