import * as lodash from 'lodash'

import {default as Timer} from '../Timer'
import {lerp} from '../lerp'

const displayDuration = 1500
const alphaMidPoint = 1200

const origScale = 1
const destScale = 2

const origAlpha = 0.3
const destAlpha = 1

class MatchText {
  constructor(scene) {
    this.scene = scene

    this.isDisplaying = false
    this.displayTimer = new Timer(displayDuration)
  }

  show(text) {
    if (this.text) {
      this.text.destroy()
    }
    this.text = this.scene.add.bitmapText(360, 360, 'system', '', 32)
    this.text.originX = 0.5
    this.text.depth = 10000
    this.text.tint = 0x3040b0

    this.text.text = text
    this.isDisplaying = true
    this.text.scaleX = origScale
    this.text.scaleY = origScale
    this.origAngle = lodash.random(-20, 0)
    this.destAngle = lodash.random(1, 20)
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
        this.text.scaleX = lerp(origScale, destScale, fraction)
        this.text.scaleY = lerp(origScale, destScale, fraction)
        this.text.angle = lerp(this.origAngle, this.destAngle, fraction)
        this.updateAlpha(elapsed)
      }
    }
  }
  
  updateAlpha(elapsed) {
    // TODO: better alpha interpolation
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