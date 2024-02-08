import React from 'react'
import recipeCard from '../../styles/recipes/recipeCard.module.css'

function RecipeCard() {

  return (
    <div className={recipeCard.container} >
        <div className={recipeCard.title}>Title</div>
        <div className={recipeCard.recipe}>
          Recipe <br />
          Recipe <br />
          Recipe <br />
        </div>
        <div className={recipeCard.footer}>
          Calories per serving : 
        </div>
    </div>
  )
}

export default RecipeCard



