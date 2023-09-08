import ingredientBar from '../styles/IngredientBar.module.css';
import PropTypes from 'prop-types';

function IngredientBar({ingredient}){

    return(
        <div className={ingredientBar.bar}>
            <div className={ingredientBar.title}>
                <div className={ingredientBar.name}>{ingredient.name}</div>
                <div className={ingredientBar.per}>per 100g</div>
            </div>
            <div className={ingredientBar.properties}>
                <h1>Calories</h1>
                <h1>Proteines</h1>
                <h1>Carbs</h1>
                <h1>Fats</h1>
            </div>
        </div>
    )
}

export default IngredientBar;

IngredientBar.propTypes={
    ingredient: PropTypes.object,
    key: PropTypes.number,
}