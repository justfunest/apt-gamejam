class TutorialScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'TutorialScene'})
  }

  preload() {
    this.load.image('instructions-bg', 'assets/images/instructions.png')
    this.load.image('btn-back', 'assets/images/btn-back.png');
    this.load.image('btn-hi-back', 'assets/images/btn-hi-back.png');
  }

  create() {
    // TODO: hardcoded image dimensions and offsets
    this.bg = this.add.sprite(600, 400, 'instructions-bg')
    this.bg.displayWidth = 1200
    this.bg.displayHeight = 800
    
    this.input.on('gameobjectup', (pointer, gameObj) => {
      gameObj.emit('clicked', gameObj)
    }, this)

    this.input.on('gameobjectover', (pointer, gameObj) => {
      gameObj.emit('over', gameObj)
    }, this)

    this.input.on('gameobjectout', (pointer, gameObj) => {
      gameObj.emit('out', gameObj)
    }, this)

    this.playBtn = this.add.sprite(700, 650, 'btn-back')
    this.playBtn.scaleX = 0.5
    this.playBtn.scaleY = 0.5
    this.playBtn.setInteractive()
    this.playBtn.on('clicked', () => {
      this.goToScene('IntroScene')
    })
    this.playBtn.on('over', () => {
      this.playBtn.setTexture('btn-hi-back')
    })
    this.playBtn.on('out', () => {
      this.playBtn.setTexture('btn-back')
    })
  }

  goToScene(name, data) {
    this.scene.stop('TutorialScene');
    this.scene.launch(name, data);
    this.bgMusic.stop();
}
}

export default TutorialScene