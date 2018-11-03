class Component {
  constructor(scene, spec, idxRow, idxCol) {
    this.spec = spec
    this.active = false

    // TODO: tile width/height
    this.sprite = scene.add.sprite(50 * idxCol, 50 * idxRow, spec.id)
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
  }
}

export default Component