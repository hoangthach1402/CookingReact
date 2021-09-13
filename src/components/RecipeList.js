import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export function Recipelist({ recipies }) {

    const { handleRecipeAdd } = useContext(RecipeContext);
    return (
        <div className="recipe-list">
            <div>
                {recipies.map(recipe => {
                    return (<Recipe key={recipe.id} {...recipe} />)
                })}
            </div>
            <div className="recipe-list__app-recipe-btn-container">
                <button onClick={handleRecipeAdd} className="btn btn--primary">Add Recipe</button>
            </div>

        </div>
    )


}
