class Field {
  constructor(sprite) {
    this.sprite = sprite
    // TODO
  }

  update(time, delta) {
    if (this.sprite.x < 600) {
      this.sprite.x += delta
    }
  }
}

export default Field