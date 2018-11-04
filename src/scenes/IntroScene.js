class IntroScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'IntroScene'})
  }

  preload() {
    this.load.image('title-bg', 'assets/images/title-bg.png')

    this.load.image('btn-instructions', 'assets/images/btn-instructions.png')
    this.load.image('btn-play', 'assets/images/btn-play.png')
  }

  create() {
    // TODO: music

    // TODO: hardcoded image dimensions and offsets
    this.bg = this.add.sprite(600, 400, 'title-bg')
    this.bg.displayWidth = 1200
    this.bg.displayHeight = 800
    
    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)

    // TODO: instructions button

    // TODO: button hover, down, out
    this.playBtn = this.add.sprite(700, 600, 'btn-play')
    this.playBtn.scaleX = 0.5
    this.playBtn.scaleY = 0.5
    this.playBtn.setInteractive()
    const _this = this
    this.playBtn.on('clicked', () => {
      _this.scene.stop('IntroScene')
      _this.scene.launch('CocktailScene')
    })
  }
}

export default IntroScene