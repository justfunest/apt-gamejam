import * as lodash from 'lodash'

import {default as components} from '../components'
import {default as recipes} from '../recipes'
import {default as Component} from '../sprites/Component'

const numRows = 6
const numCols = 6

class Field {
  constructor(scene) {
    this.scene = scene
    this.createMatrix()
  }

  createMatrix() {
    this.matrix = []
    for (let idxRow = 0; idxRow < numRows; idxRow++) {
      const row = []
      for (let idxCol = 0; idxCol < numCols; idxCol++) {
        const spec = lodash.sample(components)
        const compSprite = new Component(this.scene, this, spec, idxRow, idxCol)
        row.push(compSprite)
      }
      this.matrix.push(row)
    }
  }

  update(time, delta) {
  }

  checkMatch() {
    const selectedComponents = []
    this.matrix.forEach((row) => {
      row.forEach((component) => {
        if (component) {
          if (component.active) {
            selectedComponents.push(component)
          }
        }
      })
    })
    const idxMatchedRecipe = this.matchRecipe(selectedComponents)

    if (idxMatchedRecipe !== -1) {
      this.handleMatch(selectedComponents, idxMatchedRecipe)
    }
  }

  matchRecipe(components) {
    let isRecipeFound = false
    let idxRecipe = 0
    let idxFoundRecipe = -1
    while (!isRecipeFound && idxRecipe < recipes.length) {
      const recipe = recipes[idxRecipe]
      isRecipeFound = this.compareToRecipe(components, recipe)
      if (isRecipeFound) {
        idxFoundRecipe = idxRecipe
      }
      idxRecipe++
    }

    return idxFoundRecipe
  }

  compareToRecipe(components, recipe) {
    if (components.length !== recipe.components.length) {
      return false
    }

    let matches = true
    components.forEach((component) => {
      const componentIsInRecipe = lodash.includes(recipe.components, component.spec.id)
      matches = matches && componentIsInRecipe
    })

    return matches
  }

  handleMatch(selectedComponents, idxMatchedRecipe) {
    // TODO: drink up!
      
    const positions = selectedComponents.map((component) => {
      return {
        idxRow: component.idxRow,
        idxCol: component.idxCol
      }
    })
    this.destroyComponents(selectedComponents)
    const _this = this
    positions.forEach((pos) => {
      _this.dropCol(pos.idxRow, pos.idxCol)
    })

    // TODO: spawn new components
  }

  destroyComponents(components) {
    components.forEach((component) => {
      const idxRow = component.idxRow
      const idxCol = component.idxCol
      component.destroy()
      delete this.matrix[idxRow][idxCol]
    })
  }

  dropCol(aboveIdxRow, idxCol) {
    for (let idxRow = aboveIdxRow - 1; idxRow >= 0; idxRow--) {
      this.dropComponent(idxRow, idxCol)
    }
  }

  dropComponent(idxRow, idxCol) {
    const component = this.matrix[idxRow][idxCol]
    let dropAmount = 1

    if (component && (idxRow < numRows - 1)) {
      this.matrix[idxRow + dropAmount][idxCol] = component
      this.matrix[idxRow][idxCol] = undefined
      component.drop(dropAmount)
    } else {
      dropAmount++
    }
  }
}

export default Field