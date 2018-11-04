class GameOverScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'GameOverScene'})
  }

  preload() {
    this.load.image('lose-bg', 'assets/images/lose-bg.png')
    this.load.image('win-bg', 'assets/images/win-bg.png')

    this.load.image('btn-replay', 'assets/images/btn-replay.png')
  }

  init(state) {
    this.state = state;
    console.log(state)
  }

  create() {
    // TODO: hardcoded image dimensions and offsets

    const bgResourceName = this.state.won ? 'win-bg' : 'lose-bg'
    this.bg = this.add.sprite(600, 400, bgResourceName)
    this.bg.displayWidth = 1200
    this.bg.displayHeight = 800

    this.bgMusic = this.sound.add(this.state.won ? 'lose' : 'win')
    this.bgMusic.loop = true
    this.bgMusic.volume = 0.3
    this.bgMusic.play()

    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)

    // TODO: button hover, down, out
    this.replayBtn = this.add.sprite(950, 700, 'btn-replay')
    this.replayBtn.scaleX = 0.5
    this.replayBtn.scaleY = 0.5
    this.replayBtn.setInteractive()
    const _this = this
    this.replayBtn.on('clicked', () => {
      _this.scene.stop('GameOverScene')
      _this.scene.launch('CocktailScene')
    })
  }

  update(time, delta) {
  }
}

export default GameOverScene