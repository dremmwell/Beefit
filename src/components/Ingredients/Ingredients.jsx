import ingredients from '../../styles/ingredients/Ingredients.module.css';
import IngredientBar from './IngredientBar';
import AddIngredientForm from './AddIngredientForm';
import { useEffect, useState } from 'react';

function Ingredients(){

    const[ingredientList, setIngredientList] = useState(() => {
        const savedList = localStorage.getItem('ingredientList');
        return savedList ? JSON.parse(savedList) : [];
    });

    const[searchTerm, setSearchTerm] = useState("");
    const[isAddFormOpen, setIsAddFormOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('ingredientList', JSON.stringify(ingredientList));
    }, [ingredientList]);

    function addIngredient(newIngredient){
        setIngredientList([...ingredientList, newIngredient]);
    }

    function searchFilter(ingredientList,searchTerm) {
        const filteredIngredientList = ingredientList.filter(ingredient=>ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return filteredIngredientList;
    }

    function displayAddForm(){
        setIsAddFormOpen(true);
    }

    function handleAddIngredient(){
        displayAddForm();
    }

    function handleDelete(id){
        const newList = ingredientList.filter((item) => item.id !== id);
        setIngredientList(newList);
    }

    function handleUpdate(updatedIngredient, id){
        const newList = ingredientList.map((item) => {
            if (item.id === id) {
              return updatedIngredient;
            }
            return item;
          });
          setIngredientList(newList);
    }

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
                {searchTerm == "" && (
                    ingredientList.map((ingredient) => {
                        return ( 
                            <IngredientBar ingredient={ingredient} key={ingredient.id} onDelete={handleDelete} onUpdate={handleUpdate}/> 
                               )
                        }))
                                || (
                            searchFilter(ingredientList,searchTerm).map((ingredient) => {
                                return ( 
                                    <IngredientBar ingredient={ingredient} key={ingredient.id}/> 
                                    )
                                }))
                }
            </div>
            <div className={ingredients.searchBar}>
                <div className={ingredients.searchIcon}></div>
                <input type="text" placeholder= "Search" onChange={e=>{setSearchTerm(e.target.value)}} className={ingredients.searchInput}/>
            </div>
                <button className={ingredients.addIngredient} onClick={handleAddIngredient}>+ Add a new ingredient</button>
                <AddIngredientForm open={isAddFormOpen} onClose={() => setIsAddFormOpen()} getIngredient={addIngredient} />
        </div>
    )
}

export default Ingredients