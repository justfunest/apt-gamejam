class GameOver {
  constructor(scene) {
    this.scene = scene
    this.initText(scene.state.won)
  }

  initText(won) {
    console.log(won)
    this.won = won
    let text = won ? 'Congratulations - you got shitfaced!' : 'You sobered up - enjoy reality, idiot!' 
    text += '\nClick here to play again'
    // TODO: placement
    this.text = this.scene.add.text(360, 360, text)
    this.text.tint = 0x3040b0
    this.text.setInteractive()
    this.text.on('clicked', this.onClick.bind(this))
  }

  onClick() {
    this.scene.scene.stop('GameOverScene')
    this.scene.scene.start('CocktailScene')
  }
}

export default GameOver