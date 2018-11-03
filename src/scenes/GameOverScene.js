import GameOver from '../gameObjects/GameOver'

class GameOverScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'GameOverScene'})
  }

  preload() {
  }

  create() {
    // TODO: get win/lose state
    this.gameOver = new GameOver(this, true)

    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)
  }

  update(time, delta) {
  }
}

export default GameOverScene