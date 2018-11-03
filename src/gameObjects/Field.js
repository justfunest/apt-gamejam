import * as lodash from 'lodash'

import {default as components} from '../components'
import {default as recipes} from '../recipes'
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
        row.push(compSprite)
      }
      this.matrix.push(row)
    }
  }

  update(time, delta) {
    // TODO: don't do this every frame. Rather only when a component is clicked.
    this.checkMatch()
  }

  checkMatch() {
    const selectedComponents = []
    this.matrix.forEach((row) => {
      row.forEach((component) => {
        if (component.active) {
          selectedComponents.push(component)
        }
      })
    })
    const idxMatchedRecipe = this.isRecipe(selectedComponents)

    if (idxMatchedRecipe !== -1) {
      console.log('Matched recipe', idxMatchedRecipe)
    }
  }

  isRecipe(components) {
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
}

export default Field