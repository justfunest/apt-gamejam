import Field from '../gameObjects/Field'

class CocktailScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'CocktailScene'})
  }

  preload() {
    this.load.image('vodka', 'assets/images/kb-arrow-up.png')
    this.load.image('beer', 'assets/images/kb-arrow-left.png')
    this.load.image('whiskey', 'assets/images/kb-arrow-down.png')
    this.load.image('soda', 'assets/images/kb-arrow-right.png')
  }

  create() {
    this.field = new Field(this)
    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)
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