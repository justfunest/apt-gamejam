import * as lodash from 'lodash'

import {default as Timer} from '../Timer'
import {lerp} from '../lerp'

const displayDuration = 1000
const alphaMidPoint = 700
const origSize = 32
const destSize = 64
const origAlpha = 0
const destAlpha = 1

class MatchText {
  constructor(scene) {
    this.scene = scene
    // TODO: placement
    this.text = this.scene.add.bitmapText(360, 360, 'calibri', '', 32)
    this.text.depth = 10000
    // TODO: different tint
    this.text.tint = 0xf05050

    this.isDisplaying = false
    this.displayTimer = new Timer(displayDuration)
  }

  show(text) {
    this.text.text = text
    this.isDisplaying = true
    this.text.fontSize = origSize
    this.origAngle = lodash.random(-20, 0)
    this.destAngle = lodash.random(1, 20)
    // TODO: anchor (angle pivot) is off
    this.text.angle = this.origAngle
    this.text.alpha = origAlpha
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
        const fraction = elapsed / displayDuration
        this.text.fontSize = lerp(origSize, destSize, fraction)
        this.text.angle = lerp(this.origAngle, this.destAngle, fraction)
        this.updateAlpha(elapsed)
      }
    }
  }
  
  updateAlpha(elapsed) {
    if (elapsed < alphaMidPoint) {
      const fraction = elapsed / alphaMidPoint
      this.text.alpha = lerp(origAlpha, destAlpha, fraction)
    } else {
      const fraction = (elapsed - alphaMidPoint) / (displayDuration - alphaMidPoint)
      this.text.alpha = lerp(destAlpha, origAlpha, fraction)
    }
  }
}

export default MatchText