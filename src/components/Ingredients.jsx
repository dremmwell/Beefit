import ingredients from '../styles/Ingredients.module.css';
import IngredientBar from './IngredientBar';
import ingredientData from '../data/ingredientsData.json';
import { useState } from 'react';

function Ingredients(){

    const[ingredientList, setIngredientList] = useState(ingredientData);
    const[searchTerm, setSearchTerm] = useState("");

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
                {ingredientList.filter((ingredient)=>{
                    if(searchTerm == ""){
                        return ingredient;
                    }
                    else if (ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return ingredient;
                    }
                }).map((ingredient) => {
                    return ( 
                        <IngredientBar ingredient={ingredient} key={ingredient.key}/> 
                    );
                })}
            </div>

            <div className={ingredients.searchBar}>
                <div className={ingredients.searchIcon}></div>
                <input type="text" placeholder= "Search" onChange={e=>{setSearchTerm(e.target.value)}} className={ingredients.searchInput}/>
            </div>
                <button className={ingredients.addIngredient}>+ Add a new ingredient</button>
        </div>
    )
}

export default Ingredients