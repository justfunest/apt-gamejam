class Component {
  constructor(scene, spec, idxRow, idxCol) {
    // TODO: tile width/height
    this.sprite = scene.add.sprite(50 * idxCol, 50 * idxRow, spec.id)
  }
}

export default Component