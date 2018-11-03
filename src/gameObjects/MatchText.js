import {default as Timer} from '../Timer'
import {lerp} from '../lerp'

const displayDuration = 500
const origSize = 32
const destSize = 64

class MatchText {
  constructor(scene) {
    this.scene = scene
    // TODO: placement
    // TODO: better hiding
    this.text = this.scene.add.bitmapText(360, 360, 'calibri', '', 32)
    // TODO: different tint
    this.text.tint = 0xf05050

    this.isDisplaying = false
    this.displayTimer = new Timer(displayDuration)
  }

  show(text) {
    this.text.text = text
    this.isDisplaying = true
    this.text.fontSize = origSize
    this.text.visible = true
    this.displayTimer.start()
  }

  update(time, delta) {
    if (this.isDisplaying) {
      this.displayTimer.update(time, delta)
      const elapsed = this.displayTimer.elapsed()
      if (elapsed > displayDuration) {
        this.text.text = ''
        this.isDisplaying = false
        this.text.visible = false
      } else {
        // TODO: animate angle
        // TODO: animate opacity
        const fraction = elapsed / displayDuration
        this.text.fontSize = lerp(origSize, destSize, fraction)
      }
    }
  }
}

export default MatchText