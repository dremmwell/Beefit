import ingredientBar from '../styles/IngredientBar.module.css';
import PropTypes from 'prop-types';

function IngredientBar({ingredient}){

    return(
        <div className={ingredientBar.bar}>
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
    )
}

export default IngredientBar;

IngredientBar.propTypes={
    ingredient: PropTypes.object,
    key: PropTypes.number,
}