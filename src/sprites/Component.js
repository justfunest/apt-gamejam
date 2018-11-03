const offsetX = 120
const offsetY = 120
const tileWidth = 100
const tileHeight = 100

class Component {
  constructor(scene, field, spec, idxRow, idxCol) {
    this.field = field
    this.spec = spec
    this.active = false
    this.idxRow = idxRow
    this.idxCol = idxCol

    this.sprite = scene.add.sprite(offsetX + tileWidth * idxCol, offsetY + tileHeight * idxRow, spec.id)
    this.sprite.setInteractive()
    this.sprite.on('clicked', this.onClick.bind(this))
  }

  onClick() {
    if (this.active) {
      this.active = false
      this.sprite.tint = 0xffffff
    } else {
      this.active = true
      this.sprite.tint = 0.7 * 0xffffff
    }
    this.field.checkMatch()
  }

  drop(amount) {
    this.idxRow += amount
    // TODO: animate drop
    this.sprite.y = offsetY + tileHeight * this.idxRow
  }

  destroy() {
    this.sprite.destroy()
  }
}

export default Component