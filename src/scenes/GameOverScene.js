import GameOver from '../gameObjects/GameOver'

class GameOverScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'GameOverScene'})
  }

  preload() {
    this.load.image('bg', 'assets/images/bg.jpg')
  }

  init(state) {
    this.state = state;
    console.log(state)
  }

  create() {
    // TODO: get win/lose state

    // TODO: hardcoded image dimensions and offsets
    // TODO: music
    this.bg = this.add.sprite(600, 400, 'bg')
    this.bg.displayWidth = 1200
    this.bg.displayHeight = 800

    this.bgMusic = this.sound.add(this.state.won ? 'lose' : 'win')
    this.bgMusic.loop = true
    this.bgMusic.volume = 0.3
    this.bgMusic.play()

    this.gameOver = new GameOver(this, this.state.won)

    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)
  }

  update(time, delta) {
  }
}

export default GameOverScene