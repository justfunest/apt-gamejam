import * as lodash from 'lodash'

import {components} from '../config/config'
import {recipes} from '../config/config'
import {default as Component} from '../sprites/Component'
import {default as MatchText} from './MatchText'

const numRows = 6
const numCols = 6

class Field {
  constructor(scene, character) {
    this.scene = scene
    this.character = character
    this.createBackground()
    this.matchText = new MatchText(scene)
    this.createMatrix()
  }

  createBackground() {
    // TODO: hardcoded dimensions and offsets
    this.background = this.scene.add.sprite(380, 380, 'field-bg')
    // TODO: check alpha
    // this.background.alpha = 0.6
    this.background.displayWidth = 750
    this.background.displayHeight = 790
  }

  createMatrix() {
    // TODO: drop effect
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

    this.checkFieldHasRecipes()
  }

  destroyMatrix() {
    const _this = this
    this.matrix.forEach((row) => {
      row.forEach(this.destroyComponent.bind(this))
    })
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
    const colsToDrop = {}
    positions.forEach((pos) => {
      const {idxCol} = pos
      if (colsToDrop[idxCol]) {
        if (pos.idxRow > colsToDrop[idxCol].idxRow) {
          colsToDrop[idxCol].idxRow = pos.idxRow
        }
      } else {
        colsToDrop[idxCol] = {
          idxRow: pos.idxRow,
          idxCol: pos.idxCol
        }
      }
    })
    const _this = this
    Object.keys(colsToDrop).forEach((idxCol) => {
      const colSpec = colsToDrop[idxCol]
      _this.dropCol(colSpec.idxRow, colSpec.idxCol)
    })

    this.spawnComponents()

    this.checkFieldHasRecipes()
  }

  destroyComponents(components) {
    components.forEach(this.destroyComponent.bind(this))
  }
  
  destroyComponent(component) {
    if (component) {
      const idxRow = component.idxRow
      const idxCol = component.idxCol
      component.destroy()
      delete this.matrix[idxRow][idxCol]
    }
  }

  dropCol(aboveIdxRow, idxCol) {
    let dropAmount = 1
    for (let idxRow = aboveIdxRow - 1; idxRow >= 0; idxRow--) {
      dropAmount = this.dropComponent(idxRow, idxCol, dropAmount)
    }
  }

  dropComponent(idxRow, idxCol, dropAmount) {
    const component = this.matrix[idxRow][idxCol]
    let newDropAmount = dropAmount

    if (component && (idxRow < numRows - 1)) {
      this.matrix[idxRow + dropAmount][idxCol] = component
      this.matrix[idxRow][idxCol] = undefined
      component.drop(dropAmount)
    } else {
      newDropAmount = dropAmount + 1
    }

    return newDropAmount
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

  checkFieldHasRecipes() {
    const uniqueComponents = this.findUniqueComponents()
    let idxRecipe = 0
    let recipeFound = false

    while (!recipeFound && idxRecipe < recipes.length) {
      let recipeExists = true
      const recipe = recipes[idxRecipe]
      recipe.components.forEach((compId) => {
        const compIsPresent = uniqueComponents[compId] !== undefined
        recipeExists = recipeExists && compIsPresent
      })
      recipeFound = recipeExists
      idxRecipe++
    }

    if (!recipeFound) {
      this.destroyMatrix()
      this.matchText.show('No recipes left')
      this.createMatrix()
    }
  }

  findUniqueComponents() {
    const uniqueComponents = {}
    this.matrix.forEach((row) => {
      row.forEach((component) => {
        const compId = component.spec.id
        if (!uniqueComponents[compId]) {
          uniqueComponents[compId] = compId
        }
      })
    })

    return uniqueComponents
  }
}

export default Field