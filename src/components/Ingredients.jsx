import ingredients from '../styles/Ingredients.module.css';
import IngredientBar from './IngredientBar';

function Ingredients(){

    return(
        <div className={ingredients.container}>
            <div className={ingredients.title}>My Ingredients</div>
            <div className={ingredients.legend}>
                <h1>Calories</h1>
                <h1>Proteines</h1>
                <h1>Carbs</h1>
                <h1>Fats</h1>
            </div>
            <div className={ingredients.table}>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
                <IngredientBar/>
            </div>
            <div className={ingredients.searchBar}>Search</div>
            <div className={ingredients.addIngredient}>+ Add a new ingredient</div>
        </div>
    )
}

export default Ingredients