import {default as Timer} from '../Timer'

const displayDuration = 400

class MatchText {
  constructor(scene) {
    this.scene = scene
    // TODO: placement
    // TODO: better hiding
    this.text = this.scene.add.bitmapText(300, 300, 'font', '', 64)
    this.text.tint = 0xf05050

    this.isDisplaying = false
    this.displayTimer = new Timer(displayDuration)
  }

  show(text) {
    // TODO: animate
    this.text.z = -1000
    // TODO: don't need to uppercase with a different font
    this.text.text = text.toUpperCase()
    this.isDisplaying = true
    this.displayTimer.start()
  }

  update(time, delta) {
    if (this.isDisplaying) {
      this.displayTimer.update(time, delta)
      const elapsed = this.displayTimer.elapsed()
      if (elapsed > displayDuration) {
        this.text.text = ''
        this.isDisplaying = false
      }
    }
  }
}

export default MatchText