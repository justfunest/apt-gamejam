import * as lodash from 'lodash'

import {default as components} from '../components'
import {default as recipes} from '../recipes'
import {default as Component} from '../sprites/Component'
import {default as MatchText} from './MatchText'

const numRows = 6
const numCols = 6

class Field {
  constructor(scene, character) {
    this.scene = scene
    this.character = character
    this.createMatrix()
    this.matchText = new MatchText(scene)
  }

  createMatrix() {
    this.matrix = []
    for (let idxRow = 0; idxRow < numRows; idxRow++) {
      const row = []
      for (let idxCol = 0; idxCol < numCols; idxCol++) {
        const spec = lodash.sample(components)
        const compSprite = new Component(this.scene, this, spec, idxRow, idxCol, false)
        row.push(compSprite)
      }
      this.matrix.push(row)
    }
  }

  update(time, delta) {
    this.matchText.update(time, delta)
    this.matrix.forEach((row) => {
      row.forEach((component) => {
        if (component) {
          component.update(time, delta)
        }
      })
    })
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

    const sortedRecipeComponents = recipe.components.sort()
    const sortedComponents = components.sort((a, b) => {
      if (a.spec.id < b.spec.id) {
        return -1
      } else if (a.spec.id === b.spec.id) {
        return 0
      } else {
        return 1
      }
    })

    let matches = true
    sortedComponents.forEach((component, idx) => {
      matches = matches && component.spec.id === sortedRecipeComponents[idx]
    })

    return matches
  }

  handleMatch(selectedComponents, idxMatchedRecipe) {
    const recipe = recipes[idxMatchedRecipe]
    this.character.drink(recipe)
    
    this.matchText.show(recipe.name)

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

    this.spawnComponents()
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

  spawnComponents() {
    for (let idxCol = 0; idxCol < numCols; idxCol++) {
      let idxRow = 0
      while (idxRow < numRows && !this.matrix[idxRow][idxCol]) {
        const spec = lodash.sample(components)
        const component = new Component(this.scene, this, spec, idxRow, idxCol, true)
        this.matrix[idxRow][idxCol] = component
        idxRow++
      }
    }
  }
}

export default Field