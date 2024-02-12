import ingredientBar from '../../styles/ingredients/IngredientBar.module.css'
import PropTypes from 'prop-types';
import { useState } from "react";

function IngredientBar({ingredient, onDelete}){

    const [expanded, setExpanded] = useState(false);

    function deleteItem(itemKey){

    }

    return(
        <div className={ingredientBar.barContainer}>
            <div className= {expanded === false ? `${ingredientBar.bar}` : ingredientBar.activeBar}
                 onClick={() => setExpanded(!expanded)}>
                <div className={ingredientBar.title}>
                    <div className={ingredientBar.name}>{ingredient.name}</div>
                    <div className={ingredientBar.per}>per {ingredient.per}</div>
                </div>
                <div className={ingredientBar.properties}>
                    <h1>{ingredient.calories}</h1>
                    <h1>{ingredient.proteins}</h1>
                    <h1>{ingredient.carbs}</h1>
                    <h1>{ingredient.fats}</h1>
                </div>
            </div>
            {expanded && (
                <div className={ingredientBar.expanded}>
                    <button className={ingredientBar.updateButton}>Update Ingredient</button>
                    <button className={ingredientBar.deleteButton} onClick={() => onDelete(ingredient.name)}>Delete Ingredient</button>
                </div>     
            )}
        </div>
    )
}

export default IngredientBar;

IngredientBar.propTypes={
    ingredient: PropTypes.object,
    key: PropTypes.number,
}