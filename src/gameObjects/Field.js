import * as lodash from 'lodash'

import {default as components} from '../components'
import {default as Component} from '../sprites/Component'

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
        const spec = lodash.sample(components)
        const compSprite = new Component(this.scene, spec, idxRow, idxCol)
        row.push[compSprite]
      }
      this.matrix.push(row)
    }
  }

  update(time, delta) {
  }
}

export default Field