import React, { useState, useEffect } from 'react'
import { Recipelist } from './RecipeList'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'
import { RecipeEdit } from './RecipeEdit'

export const RecipeContext = React.createContext()

function App() {
  const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  }

  const [recipes, setRecipe] = useState(sampleRecipies)
  useEffect(() => {
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipesJSON != null) setRecipe(JSON.parse(recipesJSON))
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  //  nhan thay doi Id khi nhan nut
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  //  Nhan Object tuong ung voi Id thay doi tu` array
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  )
  // Selected Object khi selected
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  // console.log(selectedRecipe)
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'instruct . ',
      ingredients: [{ id: uuidv4(), name: 'Name ', amount: '1Tbs' }],
    }
    setRecipe([...recipes, newRecipe])
  }
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex((r) => r.id === id)
    newRecipes[index] = recipe
    setRecipe(newRecipes)
  }
  function handleRecipeDelete(id) {
    setRecipe(recipes.filter((recipe) => recipe.id != id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <Recipelist recipies={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
}

const sampleRecipies = [
  {
    id: 1,
    name: ' Plain Chicken ',
    servings: 3,
    cookTime: '1,45',
    instructions:
      '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs',
      },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 3,
    cookTime: '1,45',
    instructions: '1. Put salt on pork\n2. Put Pork in oven\n3. Eat Pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Onion',
        amount: '2 Tbs',
      },
    ],
  },
]

export default App
