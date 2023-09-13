import { useState } from 'react';
import recipes from '../../styles/recipes/Recipes.module.css';

function Recipes(){

    const[searchTerm,setSearchTerm] = useState('');
    const[isActive,setIsActive] = useState(false);

    function handleFavClick(){
        setIsActive(current => !current);
    }

    function handleAddClick(){

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
                        <div className={recipes.favorite}>
                            <div className={isActive ? recipes.favIconActive : recipes.favIcon} onClick={handleFavClick}></div>
                            <div className={recipes.favButton} onClick={handleFavClick}>Favorites</div>
                        </div>
                    </div>
                <button className={recipes.addRecipe} onClick={handleAddClick}>+ Add a new Recipe</button>
            </div>
            <div className={recipes.recipesGrid}></div>
        </div>
    )
}

export default Recipes