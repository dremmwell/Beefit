import { useState } from 'react';
import recipes from '../../styles/recipes/Recipes.module.css';
import RecipeCard from './RecipeCard';

function Recipes(){

    const[searchTerm,setSearchTerm] = useState('');
    const[isActive,setIsActive] = useState(false);

    function handleFavClick(){
        setIsActive(current => !current);
    }

    function handleAddClick(){

    }

    function onWheel (e) {
        var slider = document.getElementById("slider");
        e.preventDefault;
        slider.scrollLeft += e.deltaY;
    }

    return(
        <div className={recipes.container}>
            <div className={recipes.title}>
                My Recipes
            </div>
            <div className={recipes.options}>
                    <div className={recipes.searchFav}>
                        <div className={recipes.search}>
                            <div className={recipes.searchIcon}></div>
                            <input type="text" placeholder= "Search" onChange={e=>{setSearchTerm(e.target.value)}} className={recipes.searchInput}/>
                        </div>
                        <div className={recipes.favorite} onClick={handleFavClick}>
                            <div className={isActive ? recipes.favIconActive : recipes.favIcon} ></div>
                            <div className={recipes.favButton}>Favorites</div>
                        </div>
                    </div>
                <button className={recipes.addRecipe} onClick={handleAddClick}>+ Add a new Recipe</button>
            </div>
            <div className={recipes.recipesGrid} onWheel={onWheel} id="slider">
                    <RecipeCard />
                    <RecipeCard /> 
                    <RecipeCard /> 
            </div>
        </div>
    )
}

export default Recipes