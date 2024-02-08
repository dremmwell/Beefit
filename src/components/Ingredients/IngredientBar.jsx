import ingredientBar from '../../styles/ingredients/IngredientBar.module.css'
import PropTypes from 'prop-types';
import { useState } from "react";

function IngredientBar({ingredient}){

    const [expanded, setExpanded] = useState(false);

    return(
        <>
            <div className={ingredientBar.bar} onClick={() => setExpanded(!expanded)}>
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
                <div> Expanded </div>     
            )}
        </>
    )
}

export default IngredientBar;

IngredientBar.propTypes={
    ingredient: PropTypes.object,
    key: PropTypes.number,
}