import ingredientBar from '../../styles/ingredients/IngredientBar.module.css'
import PropTypes from 'prop-types';
import UpdateIngredientForm from './UpdateIngredientForm'
import { useState } from "react";

function IngredientBar({ingredient, onDelete, onUpdate}){

    const [expanded, setExpanded] = useState(false);

    const[isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

    function displayUpdateForm(){
        setIsUpdateFormOpen(true);
    }

    function handleUpdate(){
        displayUpdateForm();
    }

    function getUpdatedIngredient(updatedIngredient){
        onUpdate(updatedIngredient);
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
                    <button className={ingredientBar.updateButton} onClick={() => {handleUpdate(), () => onUpdate(ingredient)}}>Update Ingredient</button>
                    <UpdateIngredientForm ingredient={ingredient} open={isUpdateFormOpen} onClose={() => setIsUpdateFormOpen()} getIngredient={getUpdatedIngredient} />
                    <button className={ingredientBar.deleteButton} onClick={() => onDelete(ingredient.id)}>Delete Ingredient</button>
                </div>     
            )}

        </div>
    )
}

export default IngredientBar;

IngredientBar.propTypes={
    ingredient: PropTypes.object,
    key: PropTypes.number,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func
}