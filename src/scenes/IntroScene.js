import * as lodash from "lodash";

class IntroScene extends Phaser.Scene {
  constructor(test) {
    super({key: 'IntroScene'})
  }

  preload() {
    this.load.image('title-bg', 'assets/images/title-bg.png')

    this.load.image('btn-instructions', 'assets/images/btn-instructions.png')
    this.load.image('btn-play', 'assets/images/btn-play.png');
    this.load.audio('essa', 'assets/music/essa.ogg');
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
    this.playBtn.on('clicked', () => {
      this.goToScene('CocktailScene')
    })

    this.bgMusic = this.sound.add('essa');
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.2
    this.bgMusic.play()
  }

    goToScene(name, data) {
        this.scene.stop('IntroScene');
        this.scene.launch(name, data);
        this.bgMusic.stop();
    }
}

export default IntroScene