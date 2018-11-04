class IntroScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'IntroScene'})
  }

  preload() {
    // TODO: intro bg
    this.load.image('bg', 'assets/images/bg.jpg')
  }

  create() {
    // TODO: hardcoded image dimensions and offsets
    this.bg = this.add.sprite(600, 400, 'bg')
    this.bg.displayWidth = 1200
    this.bg.displayHeight = 800
    
    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)

    // TODO: button image
    this.text = this.add.text(600, 400, 'Start game')
    this.text.tint = 0x3040b0
    this.text.setInteractive()
    const _this = this
    this.text.on('clicked', () => {
      _this.scene.stop('IntroScene')
      _this.scene.launch('CocktailScene')
    })
  }
}

export default IntroScene