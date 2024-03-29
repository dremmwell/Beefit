import ReactDom from 'react-dom';
import addIngredientForm from '../../styles/ingredients/AddIngredientForm.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react';

export default function UpdateIngredientForm({ingredient, open, onClose, getIngredient}) {

  const [selectedForm,setSelectedForm] = useState(ingredient.per);

  function handleFormSelection(e){
    setSelectedForm(e.target.value);
  }

  const [newIngredient,setNewIngredient] = useState({
    name :ingredient.name,
    per: ingredient.per,
    item: ingredient.gramsPerItem,
    calories: ingredient.calories,
    proteins: ingredient.proteins,
    carbs: ingredient.carbs,
    fats: ingredient.fats,
    id:ingredient.id,
  })

  function handleNameChange(e){
    setNewIngredient({
      ...newIngredient,
      name: e.target.value
    });
  }

  function handlePerChange(e){
    setNewIngredient({
      ...newIngredient,
      per: e.target.value
    });
  }

  function handleItemChange(e){
    setNewIngredient({
      ...newIngredient,
      item: e.target.value
    });
  }

  function handleCaloriesChange(e){
    setNewIngredient({
      ...newIngredient,
      calories: e.target.value
    });
  }

  function handleProteinsChange(e){
    setNewIngredient({
      ...newIngredient,
      proteins: e.target.value
    });
  }

  function handleCarbsChange(e){
    setNewIngredient({
      ...newIngredient,
      carbs: e.target.value
    });
  }

  function handleFatsChange(e){
    setNewIngredient({
      ...newIngredient,
      fats: e.target.value
    });
  }

  function handleSubmit(e) {
      e.preventDefault();
      onClose();
      getIngredient(newIngredient);
  }
 
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className={addIngredientForm.overlay} onClick={onClose}>
        <div className={addIngredientForm.window} onClick={e => e.stopPropagation()}>
            <div className={addIngredientForm.title}>Update your Ingredient
            </div>
            <form action="" className={addIngredientForm.form} id="addIngredientForm" onSubmit={handleSubmit}>
                <div className={addIngredientForm.name}>
                  <label htmlFor={addIngredientForm.nameInput}>Name</label>
                  <input
                        className={addIngredientForm.nameInput} type="text"
                        id="name"
                        placeholder=" Ingredient"
                        required
                        maxLength="50"
                        onChange={handleNameChange}
                        autoFocus
                        defaultValue={ingredient.name}
                  />
                </div>
                <div className={addIngredientForm.per}>
                  <label htmlFor={addIngredientForm.perSelector}>per</label>
                  <select
                    value={selectedForm}
                    onChange={(e) => {handleFormSelection(e),handlePerChange(e)}}
                    className={addIngredientForm.perSelector}
                  >
                    <option value="100g">100g</option>
                    <option value="item">item</option>
                  </select>
                </div>
                {selectedForm == "100g" &&  
                    <>
                      <div className={addIngredientForm.numbers}>
                        <div className={addIngredientForm.numberContainerPerkg}>
                          <label htmlFor={addIngredientForm.numberInput}>Calories</label>
                              <input
                              className={addIngredientForm.numberInput} type="number"
                              id="calories"
                              placeholder=" per 100g"
                              required
                              maxLength="5"
                              onChange={handleCaloriesChange}
                              defaultValue={ingredient.calories}
                            />
                          <label htmlFor={addIngredientForm.numberInput}>g</label>
                        </div>
                        <div className={addIngredientForm.numberContainerPerkg}>
                            <label htmlFor={addIngredientForm.numberInput}>Proteins</label>
                            <input
                              className={addIngredientForm.numberInput} type="number"
                              id="proteins"
                              placeholder=" per 100g"
                              required
                              maxLength="5"
                              onChange={handleProteinsChange}
                              defaultValue={ingredient.proteins}
                            />
                            <label htmlFor={addIngredientForm.numberInput}>g</label>
                        </div>
                        <div className={addIngredientForm.numberContainerPerkg}>                       
                            <label htmlFor={addIngredientForm.numberInput}>Carbohydrates</label>
                            <input
                              className={addIngredientForm.numberInput} type="number"
                              id="carbs"
                              placeholder=" per 100g"
                              required
                              maxLength="5"
                              onChange={handleCarbsChange}
                              defaultValue={ingredient.carbs}
                            />
                            <label htmlFor={addIngredientForm.numberInput}>g</label>
                        </div>
                        <div className={addIngredientForm.numberContainerPerkg}>
                            <label htmlFor={addIngredientForm.numberInput}>Fats</label>
                            <input
                              className={addIngredientForm.numberInput} type="number"
                              id="fats"
                              placeholder=" per 100g"
                              required
                              maxLength="5"
                              onChange={handleFatsChange}
                              defaultValue={ingredient.fats}
                            />
                            <label htmlFor={addIngredientForm.numberInput}>g</label>
                        </div>
                      </div>
                    </>
                }
                {selectedForm == "item" &&   
                    <>
                      <div className={addIngredientForm.gramsPerItem}>
                      <label htmlFor={addIngredientForm.gramsPerItemInput}>1 Item =</label>
                        <input
                          className={addIngredientForm.gramsPerItemInput} type="number"
                          id="gramsPerItem"
                          placeholder=" grams"
                          required
                          maxLength="10"
                          onChange={handleItemChange}
                          defaultValue={ingredient.gramsPerItem}
                        /> 
                      <label htmlFor={addIngredientForm.gramsPerItemInput}>g</label>
                      </div>
                      <div className={addIngredientForm.numbers}>
                        <div className={addIngredientForm.numberContainerPerItem}>
                          <label htmlFor={addIngredientForm.numberInput}>Calories</label>
                          <input
                            className={addIngredientForm.numberInput} type="number"
                            id="calories"
                            placeholder=" per item"
                            required
                            maxLength="5"
                            onChange={handleCaloriesChange}
                            defaultValue={ingredient.calories}
                          />
                        </div>
                        <div className={addIngredientForm.numberContainerPerItem}>
                            <label htmlFor={addIngredientForm.numberInput}>Proteins</label>
                            <input
                              className={addIngredientForm.numberInput} type="number"
                              id="proteins"
                              placeholder=" per item"
                              required
                              maxLength="5"
                              onChange={handleProteinsChange}
                              defaultValue={ingredient.proteins}
                            />
                        </div>
                        <div className={addIngredientForm.numberContainerPerItem}>
                            <label htmlFor={addIngredientForm.numberInput}>Carbohydrates</label>
                            <input
                              className={addIngredientForm.numberInput} type="number"
                              id="carbs"
                              placeholder=" per item"
                              required
                              maxLength="5"
                              onChange={handleCarbsChange}
                              defaultValue={ingredient.carbs}
                            />
                        </div>                       
                        <div className={addIngredientForm.numberContainerPerItem}>
                            <label htmlFor={addIngredientForm.numberInput}>Fats</label>
                            <input
                              className={addIngredientForm.numberInput} type="number"
                              id="fats"
                              placeholder=" per item"
                              required
                              maxLength="5"
                              onChange={handleFatsChange}
                              defaultValue={ingredient.fats}
                            />
                        </div>
                      </div>
                    </>
                }
            </form>
            <button className={addIngredientForm.closeButton} type="submit" form="addIngredientForm">Update</button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )

}

UpdateIngredientForm.propTypes={
    ingredient: PropTypes.object,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    getIngredient: PropTypes.func,
}