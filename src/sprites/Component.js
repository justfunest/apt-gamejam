import {default as Timer} from '../Timer'
import * as lodash from 'lodash'

const offsetX = 120
const offsetY = 120
const tileWidth = 100
const tileHeight = 100
// TODO: margins/padding

// milliseconds
const dropDuration = 250

class Component {
  constructor(scene, field, spec, idxRow, idxCol, isDropping = false) {
    // TODO: cursor pointer?
    this.field = field;
    this.scene = scene;
    this.spec = spec
    this.active = false
    this.idxRow = idxRow
    this.idxCol = idxCol
    
    if (isDropping) {
      this.sprite = scene.add.sprite(offsetX + tileWidth * idxCol, offsetY - tileHeight, spec.id)
    } else {
      this.sprite = scene.add.sprite(offsetX + tileWidth * idxCol, offsetY + tileHeight * idxRow, spec.id)
    }
    this.sprite.displayWidth = tileWidth
    this.sprite.displayHeight = tileHeight
    this.sprite.setInteractive()
    this.sprite.on('clicked', this.onClick.bind(this))

    this.outline = scene.add.sprite(offsetX + tileWidth * idxCol, offsetY + tileHeight * idxRow, 'outline')
    this.outline.displayWidth = tileWidth
    this.outline.displayHeight = tileHeight
    this.outline.alpha = 0.6
    this.outline.visible = false

    this.isDropping = isDropping
    this.dropTimer = new Timer()

    if (isDropping) {
      this.initDrop()
    }
  }

  initDrop() {
    this.dropTimer.start()
    this.origY = offsetY - tileHeight
    this.destY = offsetY + tileHeight * this.idxRow
  }

  onClick() {
    if (this.active) {
      this.active = false
      this.outline.visible = false
    } else {
      this.active = true
      this.outline.y = this.sprite.y
      this.outline.visible = true;
      if (this.spec.hasOwnProperty('sound')) {
        let soundToPlay = lodash.sample(this.spec.sound);
        this.scene.sound.play(soundToPlay);
      }
    }
    this.field.checkMatch()
  }

  drop(amount) {
    this.idxRow += amount
    this.dropTimer.start()
    this.origY = this.sprite.y
    this.destY = offsetY + tileHeight * this.idxRow
    this.isDropping = true
  }

  update(time, delta) {
    if (this.isDropping) {
      this.dropTimer.update(time, delta)
      const elapsed = this.dropTimer.elapsed()
      if (elapsed > dropDuration) {
        this.sprite.y = this.destY
        this.isDropping = false
      } else {
        // TODO: factor out lerp
        const  safeDropDuration = dropDuration === 0 ? 0.0001 : dropDuration
        const fraction = elapsed / safeDropDuration
        this.sprite.y = this.origY + (this.destY - this.origY) * fraction
      }
    }
  }

  destroy() {
    this.sprite.destroy()
    this.outline.destroy()
  }
}

export default Component