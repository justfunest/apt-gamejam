class Component {
  constructor(scene, spec, idxRow, idxCol) {
    // TODO: tile width/height
    this.sprite = scene.add.sprite(50 * idxCol, 50 * idxRow, spec.id)
    this.sprite.setInteractive()
    this.sprite.on('clicked', this.onClick)
  }

  onClick() {
    console.log('sprite clicked')
  }
}

export default Component