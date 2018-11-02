import * as lodash from 'lodash'

import {default as components} from '../components'

class Field {
  constructor(scene) {
    this.scene = scene
    this.createMatrix()
  }

  createMatrix() {
    this.matrix = []
    for (let idxRow = 0; idxRow < 10; idxRow++) {
      const row = []
      for (let idxCol = 0; idxCol < 8; idxCol++) {
        const comp = lodash.sample(components)
        const compSprite = this.scene.add.sprite(idxCol * 50, idxRow * 50, comp.id)
        row.push[compSprite]
      }
      this.matrix.push(row)
    }
  }

  update(time, delta) {
  }
}

export default Field